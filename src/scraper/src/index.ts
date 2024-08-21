import PuppeteerScraper, { ScraperConfig } from "./Scraper";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8181;

app.use(express.json());
app.use(
  cors({
    origin: process.env.EXPRESS_CLIENT_ORIGIN,
  })
);

app.get("/api/v1/scrape", async (req: Request, res: Response) => {
  try {
    if (!req.body || !req.body.url || !req.body.config) {
      return res.status(400).json({ message: "Missing required parameters: url and config" });
    }

    const { url, config }: { url: string; config: ScraperConfig } = req.body;

    console.log("Starting scraper", config.provider);

    const scraper = new PuppeteerScraper(url, config);
    const scraperData = await scraper.scrape();

    if (!scraperData) {
      return res.status(500).json({ message: "Failed to scrape data" });
    }

    res.json({ data: scraperData, url, config });
  } catch (error: any) {
    console.error("Error while scraping", error.message, error.stack);
    res.status(500).json({ message: "Failed to scrape data" });
  }
});

app.listen(PORT, () => console.log("Scraper Service started listening on port:", PORT))
