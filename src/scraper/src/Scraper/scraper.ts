import puppeteer, { Browser, Page } from "puppeteer";
import URLParser from "../UrlParser/urlParser";

const chromium = require('@sparticuz/chromium');


//#region Type definitions
interface ConfigProps {
  element: string;
  attribute?: string;
  value?: string;
  resultAttribute?: string;
}

export interface ScraperConfig {
  container: Omit<ConfigProps, "resultAttribute">[];
  title?: ConfigProps[];
  image?: ConfigProps[];
  href?: ConfigProps[];
  lastUpdated?: ConfigProps[];
  description?: ConfigProps[];
  provider: string;
  subPageConfig?: {
    title?: ConfigProps[];
    image?: ConfigProps[];
    lastUpdated?: ConfigProps[];
    description?: ConfigProps[];
    readTime: ConfigProps[];
    tags: ConfigProps[];
  };
}

interface Scraper {
  scrape(url: string, config: ScraperConfig): Promise<any[]>;
}
//#endregion


export default class PuppeteerScraper implements Scraper {
  private browser: Browser | null = null;
  private url: URLParser;
  private config: ScraperConfig;

  constructor(url: string, config: ScraperConfig) {
    this.config = config;
    this.url = new URLParser(url);
  }

  /**
   * Performs web scraping using Puppeteer to extract data from a given URL based on the provided configuration.
   *
   * @returns A Promise that resolves to an array of scraped data objects.
   *
   * @throws Throws an error if the browser is not instantiated.
   *
   * @remarks
   * The function performs the following steps:
   * 1. Launches a browser instance.
   * 2. Creates a new page in the browser.
   * 3. Navigates to the specified URL.
   * 4. Extracts initial data (including URLs to visit) using the provided configuration.
   * 5. Visits each URL and scrapes additional data using the provided configuration.
   * 6. Processes the scraped data.
   * 7. Closes the browser instance.
   * 8. Returns the processed data.
   */
  public async scrape(): Promise<any[]> {
    await this.launchBrowser();
    const page = await this.createPage();
    await page.goto(this.url.getURL(), { waitUntil: 'load' });

    // Step 1: Scrape initial data (including URLs to visit)
    const data = await this.extractData(page);

    // Step 2: Visit each URL and scrape additional data
    const detailedData = await this.scrapeSubPages(page, data);

    const processedData = this.postProcess(detailedData);

    await this.closeBrowser();
    return processedData;
  }

  private async launchBrowser(): Promise<void> {
    this.browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  private async createPage(): Promise<Page> {
    if (!this.browser) throw new Error("Browser not instantiated");
    return this.browser.newPage();
  }

  private async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  /**
   * Extracts data from a web page using the provided configuration.
   *
   * @param page - The Puppeteer Page instance to interact with the web page.
   *
   * @returns A Promise that resolves to an array of scraped data objects.
   *
   * @remarks
   * This function uses the `page.evaluate` method to execute JavaScript code in the browser context.
   * It extracts data from the web page based on the provided configuration and returns it as an array of objects.
   *
   * The function performs the following steps:
   * 1. Defines a helper function `getAttributeOrText` to retrieve the attribute value or text content of an element based on the provided configuration.
   * 2. Constructs a selector string using the `container` configuration to select the container elements.
   * 3. Uses `document.querySelectorAll` to select the container elements and converts them to an array.
   * 4. Maps over the container elements and extracts data using the `getAttributeOrText` function for each specified configuration property.
   * 5. Returns an array of scraped data objects, where each object contains the extracted data for a container element.
   */
  private async extractData(page: Page): Promise<any[]> {
    return page.evaluate((config: ScraperConfig) => {

      const getAttributeOrText = (element: Element, config: ConfigProps): string | null => {
        const matchedElement = element.querySelector(config.element);

        // return null if nothing matched
        if (!matchedElement) return null;

        // if no resultAttribute is provided, then return the text content of the element, 
        // null it there is no text content
        if (!config.resultAttribute) return matchedElement.textContent?.trim() || null;

        // return the resultAttribute if it exists and the provided attribute matches its value
        if (config.attribute && config.value) {
          if (matchedElement.getAttribute(config.attribute) === config.value) {
            return matchedElement.getAttribute(config.resultAttribute);
          }
        }

        // return the resultAttribute if it exists but no attributes or values present, 
        // null if not resultAttribute is not present
        return matchedElement.getAttribute(config.resultAttribute) || null;
      };

      const containerElements = Array.from(
        document.querySelectorAll(config.container.map(({ element, attribute, value }) =>
          `${element}[${attribute}="${value}"]`
        ).join(', '))
      );

      return containerElements.map((element) => {
        const result: {
          [key: string]: string | null | undefined
        } = {};

        config.title?.map((item) => result.title = getAttributeOrText(element, item));
        config.image?.map((item) => result.image = getAttributeOrText(element, item));
        config.href?.map((item) => result.href = getAttributeOrText(element, item));
        config.lastUpdated?.map((item) => result.date = getAttributeOrText(element, item));
        config.description?.map((item) => result.description = getAttributeOrText(element, item));
        result.provider = config.provider;

        return result;
      });
    }, this.config);
  }

  /**
   * Scrapes subpages for additional data based on the provided configuration.
   *
   * @param page - The Puppeteer Page instance to interact with the web page.
   * @param data - The initial scraped data containing URLs to visit.
   *
   * @returns A Promise that resolves to an array of scraped data objects, including additional data from subpages.
   *
   * @remarks
   * This function iterates through the provided data, visits each URL, and scrapes additional data using the provided configuration.
   * It ensures that duplicate entries are not added to the results array.
   *
   * The function performs the following steps:
   * 1. Initializes an empty array `results` to store the scraped data.
   * 2. Processes the initial scraped data using the `postProcess` method.
   * 3. Iterates through each item in the processed data.
   * 4. Skips items without an `href` property.
   * 5. Creates a new Puppeteer Page instance for each subpage.
   * 6. Navigates to the subpage URL and waits for the page to load.
   * 7. Logs a message indicating the progress of scraping.
   * 8. Extracts additional data from the subpage using the `page.evaluate` method and the provided configuration.
   * 9. Constructs a unique item object by merging the initial data item, subpage data, and an `id` property.
   * 10. Checks if the unique item is a duplicate by comparing its `id` with existing items in the `results` array.
   * 11. Adds the unique item to the `results` array if it is not a duplicate.
   * 12. Closes the subpage Page instance.
   * 13. Returns the `results` array.
   */
  private async scrapeSubPages(page: Page, data: any[]): Promise<any[]> {
    const results: any[] = [];
    const processedData = this.postProcess(data)

    for (const item of processedData) {
      if (!item.href) continue;
      const subPage = await this.createPage();
      const id = item.href.split('/').pop();
      await subPage.goto(item.href, { waitUntil: 'load' });

      console.log("Scraping page", id, "...")

      results.map(item => { if (item.id === id) return })

      const subPageData = await subPage.evaluate((config: ScraperConfig) => {
        const getAttributeOrText = (element: Element, config: ConfigProps): string | null => {
          const matchedElement = element.querySelector(config.element);
          if (!matchedElement) return null;
          if (!config.resultAttribute) return matchedElement.textContent?.trim() || null;
          if (config.attribute && config.value) {
            if (matchedElement.getAttribute(config.attribute) === config.value) {
              return matchedElement.getAttribute(config.resultAttribute);
            }
          }
          return matchedElement.getAttribute(config.resultAttribute) || null;
        };

        const result: {
          [key: string]: string | null | undefined
        } = {};

        config.subPageConfig?.title?.map((item) => {
          const matchedElement = document.querySelector(item.element);
          if (matchedElement) {
            result.title = getAttributeOrText(matchedElement, item);
          }
        });
        config.subPageConfig?.image?.map((item) => {
          const matchedElement = document.querySelector(item.element);
          if (matchedElement) {
            result.image = getAttributeOrText(matchedElement, item);
          }
        });
        config.subPageConfig?.lastUpdated?.map((item) => {
          const matchedElement = document.querySelector(item.element);
          if (matchedElement) {
            result.date = getAttributeOrText(matchedElement, item);
          }
        });
        config.subPageConfig?.description?.map((item) => {
          const matchedElement = document.querySelector(item.element);
          if (matchedElement) {
            result.description = getAttributeOrText(matchedElement, item);
          }
        });
        config.subPageConfig?.readTime?.map((item) => {
          const matchedElement = document.querySelector(item.element);
          if (matchedElement) {
            result.readTime = getAttributeOrText(matchedElement, item);
          }
        });
        config.subPageConfig?.tags?.map((item) => {
          const matchedElement = document.querySelector(item.element);
          if (matchedElement) {
            result.tags = getAttributeOrText(matchedElement, item);
          }
        })

        return result;
      }, this.config);

      const uniqueItem = { ...item, ...subPageData, id };
      const isDuplicate = results.some(result => result.id === uniqueItem.id);

      if (!isDuplicate) {
        results.push(uniqueItem);
      }
      await subPage.close();
    }

    return results;
  }

  private postProcess(data: any[]): any[] {
    const host = `${this.url.getProtocol()}//${this.url.getHost()}`;

    return data.map(item => {
      item.image = this.ensureAbsoluteUrl(item.image, host);
      item.href = this.ensureAbsoluteUrl(item.href, host);
      return item;
    });
  }

  private ensureAbsoluteUrl(url: string, host: string): string | null {
    try {
      new URL(url);
      return url;
    } catch {
      const absoluteUrl = host.concat(url);
      return absoluteUrl === host ? null : absoluteUrl;
    }
  }
}
