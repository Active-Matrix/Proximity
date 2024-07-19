import { cache } from "react";

export const getAllTopics = cache(async () => {
  const topics = [
    {
      label: 'For You',
      id: 'for-you',
    },
    {
      label: 'AI',
      id: 'ai',
    },
    {
      label: 'Future',
      id: 'future',
    },
    {
      label: 'Biotech',
      id: 'biotech',
    },
    {
      label: 'GPT-4',
      id: 'gpt-4',
    },
    {
      label: 'Energy',
      id: 'energy',
    },
    {
      label: 'Human',
      id: 'human',
    }
  ]
  return topics
})