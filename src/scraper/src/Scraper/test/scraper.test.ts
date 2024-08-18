import puppeteer, { Browser, Page } from "puppeteer";
const { startServer, stopServer } = require('./mockServer.js');
import PuppeteerScraper, { ScraperConfig } from "..";

describe("PuppeteerScraper with Local Server", () => {
  let scraper: PuppeteerScraper;
  let mockConfig: ScraperConfig;
  let mockPage: Page;
  let mockBrowser: Browser;
  let server: any;

  beforeAll(async () => {
    server = await startServer(); // Start the server before tests run

    mockConfig = {
      container: [{
        element: 'div',
        attribute: 'id',
        value: 'container'
      }],
      title: [{
        element: 'h1',
        attribute: 'id',
        value: 'title',
      }],
      image: [{
        element: 'img',
        attribute: 'id',
        value: 'image',
        resultAttribute: 'src'
      }],
      href: [{
        element: 'a',
        attribute: 'id',
        value: 'link',
        resultAttribute: 'href'
      }],
      lastUpdated: [{
        element: 'p',
        attribute: 'id',
        value: 'last-updated'
      }],
      description: [{
        element: 'span',
        attribute: 'id',
        value: 'description'
      }],
      provider: 'TestProvider'
    };
    scraper = new PuppeteerScraper('http://localhost:8080', mockConfig);
  });

  afterAll(async () => {
    await stopServer(server); // Stop the server after tests complete
  });

  it("should scrape data and return processed results", async () => {
    const result = await scraper.scrape();
    expect(result).toEqual([{
      title: 'Sample Title',
      description: 'Sample description',
      image: 'https://dummyimage.com/300/09f/fff.png',
      href: 'http://localhost:8080/sample-link',
      date: '2024-01-01',
      provider: 'TestProvider',
    }]);
  });

  it("should throw an error if page.goto fails", async () => {
    // Mocking Puppeteer methods
    jest.spyOn(puppeteer, 'launch').mockResolvedValueOnce({
      newPage: jest.fn().mockResolvedValueOnce({
        goto: jest.fn().mockRejectedValueOnce(new Error("Failed to navigate")),
      }) as unknown as Page,
      close: jest.fn(),
    } as unknown as Browser);

    await expect(scraper.scrape()).rejects.toThrow("Failed to navigate");
  });

  it("should throw an error if browser fails to close", async () => {
    // Mocking Puppeteer methods
    jest.spyOn(puppeteer, 'launch').mockResolvedValueOnce({
      newPage: jest.fn().mockResolvedValueOnce({
        goto: jest.fn().mockResolvedValueOnce(undefined),
        evaluate: jest.fn().mockResolvedValueOnce([]),
      }) as unknown as Page,
      close: jest.fn().mockRejectedValueOnce(new Error("Failed to close browser")),
    } as unknown as Browser);

    await expect(scraper.scrape()).rejects.toThrow("Failed to close browser");
  });
});
