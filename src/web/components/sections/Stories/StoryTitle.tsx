import React from 'react';
import { Text } from '@/components/ui/text';

const StoryTitle = ({ storyTitle }: { storyTitle: string }) => (
  <Text size="lg" className="px-2 text-[#1e1e1e] font-[500] line-clamp-2">
    {storyTitle}
  </Text>
);

export default StoryTitle;
