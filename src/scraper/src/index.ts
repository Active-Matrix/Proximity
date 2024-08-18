import PuppeteerScraper, { ScraperConfig } from "./Scraper";
import fs from "node:fs"

const config: ScraperConfig = {
  container: [{
    element: 'div',
    attribute: 'data-testid',
    value: 'edinburgh-article',
  }],
  title: [
    {
      element: 'h2',
      attribute: 'data-testid',
      value: 'card-headline'
    }
  ],
  image: [
    {
      element: 'img',
      attribute: 'data-testid',
      value: 'card-media',
      resultAttribute: 'src'
    }
  ]
}

const url = "https://www.bbc.com/news"

const main = async () => {
  const scraper = new PuppeteerScraper(url, config)
  const data = await scraper.scrape();
  console.log(data);
  fs.writeFile('./.dist/artifacts.json', JSON.stringify(data), err => {
    console.log(err);
  });
}
main() 