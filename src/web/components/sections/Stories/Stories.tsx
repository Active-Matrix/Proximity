'use client';
import { Column, Row } from '@artimisjs/ui';
import StoryAvatar from './storyAvatar';
import StoryOverview from './StoryOverview';
import HorizontalScroll from '@/components/ui/horizontalScroll';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/context/contextManager';
import { StoryType } from '@/types';
import { getAllStories } from '@/utils/index';
import { StoriesSkeleton, StoryOverviewSkeleton } from '@/components/skeleton';
import '@/styles/scrollSnap.scss';
import StoriesScroll from './StoriesScroll';

const Stories = () => {
  const { stories, setStories, selectedSourceID, setSelectedSourceID } =
    useContext(GlobalContext);
  const [selectedSource, setSelectedSource] = useState<StoryType>();
  const [isPreviewLoading, setIsPreviewLoading] = useState(true);
  const triggerRefetch = false;

  useEffect(() => {
    const fetchStories = async () => {
      setIsPreviewLoading(true);
      const res = await getAllStories();
      setStories(res);
      selectedSourceID === '' && setSelectedSourceID(res[0].id);
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
  }, [selectedSourceID, triggerRefetch]);

  return selectedSource ? (
    <Column
      align="start"
      className="gap-4 w-full h-full lg:w-[76%] lg:overflow-x-hidden"
    >
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-3 lg:gap-8 px-2">
          {stories?.map((story) => (
            <StoryAvatar
              avatar={story.avatar}
              name={story.name}
              id={story.id}
              key={story.name}
            />
          ))}
        </Row>
      </HorizontalScroll>

      {isPreviewLoading ? (
        <StoryOverviewSkeleton />
      ) : (
        <StoriesScroll selectedSource={selectedSource} />
      )}
    </Column>
  ) : (
    <StoriesSkeleton />
  );
};

export default Stories;
