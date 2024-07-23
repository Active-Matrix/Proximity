import React from 'react';
import { Card, Column } from '@artimisjs/ui';
import StoryImage from './StoryImage';
import StoryHeader from './StoryHeader';
import StoryFooter from './StoryFooter';
import StoryTitle from './StoryTitle';

interface StoryOverviewProps {
  coverImage: string;
  sourceName: string;
  sourceAvatar: string;
  storyTags: string[];
  storyTitle: string;
  storyReadTime: number;
}

const StoryOverview: React.FC<StoryOverviewProps> = ({
  coverImage,
  sourceName,
  sourceAvatar,
  storyTags,
  storyTitle,
  storyReadTime,
}) => {
  return (
    <Column className="gap-2 px-2">
      <Card height="fit" width="full" radius="xxl" className="h-[26vh]">
        <Card.Backdrop className="h-full w-full">
          <StoryImage
            src={coverImage}
            alt={`cover image of story from ${sourceName}`}
          />
        </Card.Backdrop>
        <StoryHeader sourceAvatar={sourceAvatar} sourceName={sourceName} />
        <StoryFooter storyReadTime={storyReadTime} storyTags={storyTags} />
        <div
          className="bg-gradient-to-t from-[#0000008d] via-[#ffffff00] to-[#fff0] 
        h-full w-full absolute top-0 z-[7]"
        />
      </Card>
      <StoryTitle storyTitle={storyTitle} />
    </Column>
  );
};

export default StoryOverview;
