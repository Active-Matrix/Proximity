import puppeteer, { Browser, Page } from "puppeteer";
import URLParser from "../UrlParser/urlParser";

interface ConfigProps {
  element: string;
  attribute?: string;
  value?: string;
  resultAttribute?: string;
}

export interface ScraperConfig {
  container: Omit<ConfigProps, "resultAttribute">[];
  title: ConfigProps[];
  image: ConfigProps[];
}

interface Scraper {
  scrape(url: string, config: ScraperConfig): Promise<any[]>;
}

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

  public async scrape(): Promise<any[]> {
    await this.launchBrowser(); //? launch the browser

    //? go the the URL and eq thhe data
    const page = await this.createPage();
    const url = this.url.getURL();

    await page.goto(url, { waitUntil: 'load' });

    const data = await this.extractData(page, this.config);
    const processData = this.processData(url, data)

    await this.closeBrowser(); //? close the browser

    //? Return the scraped data
    return processData;
  }

  private async launchBrowser(): Promise<Browser> {
    return this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
  }

  private async createPage(): Promise<Page> {
    if (!this.browser) throw new Error("Browser not instantiated");
    return await this.browser.newPage();
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
  * @param config - The ScraperConfig object containing the selectors for data extraction.
  *
  * @returns A Promise that resolves to an array of objects, each containing the extracted data.
  *
  * @remarks
  * This function uses the `page.evaluate` method to execute JavaScript code in the browser context.
  * It selects elements based on the provided configuration and extracts the desired data.
  * The extracted data is then returned as an array of objects.
  */

  private async extractData(page: Page, config: ScraperConfig): Promise<any[]> {
    return page.evaluate((config: ScraperConfig) => {
      function getAttributeOrText(element: Element, config: ConfigProps) {
        const matchedElement = element.querySelector(config.element);

        if (!matchedElement) return null
        if (!config.resultAttribute) return matchedElement.textContent?.trim()

        // if attribute matches the value
        if (config.attribute && config.value) {
          if (matchedElement.getAttribute(config.attribute) === config.value)
            return matchedElement.getAttribute(config.resultAttribute);
        }

        // return result attribute
        return matchedElement.getAttribute(config.resultAttribute)
      }

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
        config.title.map((item) => result.title = getAttributeOrText(element, item));
        config.image.map((item) => result.image = getAttributeOrText(element, item));
        return result;
      });
    }, config);
  }



  private processData(url: string, data: any[]): any[] {
    return data.map(item => {
      if (item.image) {
        item.image = `${url}/${item.image}`;
      }
      return item;
    });
  }


}
