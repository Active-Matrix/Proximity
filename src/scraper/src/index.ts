import PuppeteerScraper, { ScraperConfig } from "./Scraper";


const config: ScraperConfig = {
  container: [{
    element: 'div',
    attribute: 'data-component-name',
    value: 'card',
  }],
  title: [
    {
      element: 'span',
      attribute: 'data-editable',
      value: 'headline',
    }
  ],
  image: [
    {
      element: 'img',

      resultAttribute: 'src'
    }
  ]
}

const url = "https://edition.cnn.com/?refresh=1"

const main = async () => {
  const scraper = new PuppeteerScraper(url, config)
  const data = await scraper.scrape();
  console.log(data);
}

main()