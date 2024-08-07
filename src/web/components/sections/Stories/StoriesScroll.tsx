import HorizontalScroll from '@/components/ui/horizontalScroll';
import React from 'react';
import StoryOverview from './StoryOverview';
import { StoryType } from '@/types';
import { cn } from '@/lib/utils';

const StoriesScroll = ({ selectedSource }: { selectedSource: StoryType }) => {
  return (
    <HorizontalScroll
      className={cn(
        'px-2 gap-3 scroll-snap-horizontal lg:px-4 lg:justify-between',
        selectedSource.stories.length <= 1 && 'flex-center lg:flex-start'
      )}
    >
      {selectedSource.stories.map((story, index) => (
        <StoryOverview
          key={index}
          coverImage={story.coverImage}
          sourceAvatar={selectedSource.avatar}
          sourceName={selectedSource.code}
          storyTitle={story.title}
          storyTags={story.tags}
          storyReadTime={story.readTime}
        />
      ))}
    </HorizontalScroll>
  );
};

export default StoriesScroll;
