import PuppeteerScraper, { ScraperConfig } from "./Scraper";


const config: ScraperConfig = {
  attributeSelector: ['class'],
  containerSelector: ['product_pod'],
  titleSelector: ['h3'],
  imageSelector: ['img'],
}

const url = "https://books.toscrape.com/"

const main = async () => {
  const scraper = new PuppeteerScraper(url, config)
  const data = await scraper.scrape();
  console.log(data);
}

main()