import React from 'react';
import { Card } from '@artimisjs/ui';
import { Text } from '@/components/ui/text';

interface StoryFooterProps {
  storyTags: string[];
  storyReadTime: number;
}

const StoryFooter: React.FC<StoryFooterProps> = ({
  storyTags,
  storyReadTime,
}) => (
  <Card.Footer className="w-full bottom-0 flex justify-between items-center px-4 pb-2 z-[8] lg:hidden">
    <Text className="text-white font-semibold" size="sm">
      {storyTags.map((storyTag) => (
        <span key={storyTag} className="mr-1">
          #{storyTag.toLowerCase()}
        </span>
      ))}
    </Text>
    <Text className="text-white font-semibold" size="sm">
      {storyReadTime} min read
    </Text>
  </Card.Footer>
);

export default StoryFooter;
