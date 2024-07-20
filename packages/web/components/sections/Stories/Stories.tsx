'use client';
import { Column, Row } from '@artimisjs/ui';
import StoryAvatar from './storyAvatar';
import StoryOverview from './StoryOverview';
import HorizontalScroll from '@/components/ui/horizontalScroll';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/config/contextManager';
import { StoryType } from '@/types';
import { getAllStories } from '@/utils/index';
import { StoriesSkeleton, StoryOverviewSkeleton } from '@/components/skeleton';

const Stories = () => {
  const { selectedSourceID } = useContext(GlobalContext);
  const [stories, setStories] = useState<StoryType[] | null>(null);
  const [selectedSource, setSelectedSource] = useState<StoryType>();
  const [isPreviewLoading, setIsPreviewLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setIsPreviewLoading(true);
      const res = await getAllStories();
      setStories(res);
      setIsPreviewLoading(false);
    };
    fetchStories();
  }, []);

  useEffect(() => {
    setIsPreviewLoading(true);
    const Source = stories?.find((story) => story.id === selectedSourceID);
    if (Source) {
      setSelectedSource(Source);
    }
    setTimeout(() => setIsPreviewLoading(false), 420);
  }, [selectedSourceID]);

  if (stories === null) {
    return <StoriesSkeleton />;
  }

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
      {selectedSource &&
        (isPreviewLoading ? (
          <StoryOverviewSkeleton />
        ) : (
          <StoryOverview
            coverImage={selectedSource.stories[0].coverImage}
            sourceAvatar={selectedSource.avatar}
            sourceName={selectedSource.code}
            storyTitle={selectedSource.stories[0].title}
            storyTags={selectedSource.stories[0].tags}
            storyReadTime={selectedSource.stories[0].readTime}
          />
        ))}
    </Column>
  );
};

export default Stories;
