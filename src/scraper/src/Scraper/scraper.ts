import puppeteer, { Browser, Page } from "puppeteer";
import URLParser from "../UrlParser/urlParser";

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
    try {
      this.url = new URLParser(url);
    } catch (error) {
      throw new Error(`[Scraper] ${error}`);
    }
  }

  /**
 * Performs web scraping using Puppeteer and the provided configuration.
 *
 * @returns A Promise that resolves to an array of scraped data items.
 *
 * @throws Will throw an error if the browser fails to launch or close.
 * @throws Will throw an error if the URL provided in the constructor is invalid.
 */
  public async scrape(): Promise<any[]> {
    await this.launchBrowser();
    const page = await this.createPage();
    await page.goto(this.url.getURL(), { waitUntil: 'load' });

    const data = await this.extractData(page);
    const processedData = this.postProcess(data);

    await this.closeBrowser();
    return processedData;
  }

  private async launchBrowser(): Promise<void> {
    this.browser = await puppeteer.launch({ headless: false, defaultViewport: null });
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
 * Extracts data from a webpage using the provided configuration.
 *
 * @param page - The Puppeteer Page object representing the webpage to scrape.
 *
 * @returns A Promise that resolves to an array of scraped data items.
 *
 * @remarks
 * This function uses the `page.evaluate` method to run JavaScript code in the browser context.
 * It iterates through the provided configuration, selects elements on the webpage, and extracts
 * data based on the specified attributes and selectors.
 *
 * The extracted data is then returned as an array of objects, where each object represents a
 * data item and contains the extracted information.
 *
 * @throws Will throw an error if the `page` parameter is not provided.
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
        console.log(element)
        const result: {
          [key: string]: string | null
          | undefined
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
