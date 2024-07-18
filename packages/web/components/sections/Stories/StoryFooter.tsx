import React from 'react';
import { Card, Text } from '@artimisjs/ui';

interface StoryFooterProps {
  storyTags: string[];
  storyReadTime: number;
}

const StoryFooter: React.FC<StoryFooterProps> = ({
  storyTags,
  storyReadTime,
}) => (
  <Card.Footer className="w-full bottom-0 flex justify-between items-center px-4 pb-2 z-[8]">
    <Text className="text-white font-semibold">
      {storyTags.map((storyTag) => (
        <span key={storyTag} className="mr-1">
          #{storyTag}
        </span>
      ))}
    </Text>
    <Text className="text-white font-semibold">{storyReadTime} min read</Text>
  </Card.Footer>
);

export default StoryFooter;
