import { fetchData } from "@/lib/axiosDataProvider";
import { TopicsType } from "@/types";
import { cache } from "react";

export const getAllTopics = cache(async () => {
  const topics = await fetchData<TopicsType[]>('/topics')
  return topics
})