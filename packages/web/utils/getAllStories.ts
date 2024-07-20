import { fetchData } from '@/lib/axiosDataProvider';
import { StoryType } from '@/types';
import { cache } from 'react';

export const getAllStories = cache(async () => {
  const stories = await fetchData<StoryType[]>('/stories');
  return stories;
});