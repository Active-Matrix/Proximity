import puppeteer, { Browser, Page } from "puppeteer";
import URLParser from "../UrlParser/urlParser";

export interface ScraperConfig {
  attributeSelector: string[];
  containerSelector: string[];
  titleSelector: string[];
  imageSelector: string[];
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

    const data = await this.extractData(page, this.config, []);
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

  private async extractData(page: Page, config: ScraperConfig,
    callbacks: Array<(element: Element, config: ScraperConfig) => string | null>): Promise<any[]> {
    return page.evaluate((config: ScraperConfig) => {
      const elements = Array.from(
        document.querySelectorAll(`[${config.attributeSelector}="${config.containerSelector}"]`)
      );

      const selectTitle = (element: Element, config: ScraperConfig): string | null => {
        const selectedTitle = element.querySelector(`[${config.attributeSelector}="${config.titleSelector}"]`);
        return selectedTitle?.getAttribute(config.titleSelector[0] || '') ||
          selectedTitle?.textContent?.trim() ||
          null;
      }

      const selectImage = (element: Element, config: ScraperConfig): string | null => {
        const selectedImage = element.querySelector(config.imageSelector[0] || '');
        return selectedImage?.getAttribute("src") || null;
      }

      return elements.map((element) => {
        const result: { [key: string]: string | null } = {};
        result.title = selectTitle(element, config);
        result.image = selectImage(element, config);
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
