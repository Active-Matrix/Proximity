'use client';
import { Column, Row } from '@artimisjs/ui';
import StoryAvatar from './storyAvatar';
import StoryOverview from './StoryOverview';
import HorizontalScroll from '@/components/ui/horizontalScroll';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/config/contextManager';
import { StoryType } from '@/types';
import { getAllStories } from '@/utils/index';

const Stories = () => {
  const { selectedSourceID } = useContext(GlobalContext);
  const [stories, setStories] = useState<StoryType[]>();
  const [selectedSource, setSelectedSource] = useState<StoryType>();

  useEffect(() => {
    async () => {
      const res = await getAllStories();
      setStories(res);
    };

    const Source = stories?.find((story) => story.id === selectedSourceID);
    if (Source) {
      setSelectedSource(Source);
      setSelectedSource(Source);
    }
  }, [selectedSourceID]);

  return (
    <Column align="start" className="gap-4">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2">
          {stories?.map((story, index) => (
            <StoryAvatar
              avatar={story.avatar}
              name={story.name}
              id={story.id}
              key={story.name}
              isDefault={index === 0}
            />
          ))}
        </Row>
      </HorizontalScroll>
      {selectedSource && (
        <StoryOverview
          coverImage={selectedSource.stories[0].coverImage}
          sourceAvatar={selectedSource.avatar}
          sourceName={selectedSource.code}
          storyTitle={selectedSource.stories[0].title}
          storyTags={selectedSource.stories[0].tags}
          storyReadTime={selectedSource.stories[0].readTime}
        />
      )}
    </Column>
  );
};

export default Stories;
