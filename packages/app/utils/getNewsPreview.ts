import { NewsPreviewType } from "@/types";
import { cache } from "react";
import { fetchData } from "@/lib/axiosDataProvider";

export const getNewsPreview = cache(async (selectedTopic: string) => {
  try {
    const newsList = await fetchData<NewsPreviewType[]>('/news');

    if (selectedTopic === 'for-you') {
      const filteredNewsList: NewsPreviewType[] = []
      const filteredNews = newsList.filter(news => news.category?.toLowerCase() === 'for-you')
      filteredNewsList.push(...filteredNews)
      return filteredNewsList
    }

    return newsList.filter(news => news.tags.includes(selectedTopic.toLowerCase()))
  } catch (error) {
    console.error("Error fetching news preview:", error);
    throw error;
  }
})