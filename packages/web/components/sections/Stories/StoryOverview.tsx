import React from 'react';
import { Card, Column } from '@artimisjs/ui';
import StoryImage from './StoryImage';
import StoryHeader from './StoryHeader';
import StoryFooter from './StoryFooter';
import StoryTitle from './StoryTitle';

const StoryOverview: React.FC = () => {
  return (
    <Column className="gap-2 px-2">
      <Card height="fit" width="full" radius="xxl" className="h-[26vh]">
        <Card.Backdrop className="h-full w-full">
          <StoryImage
            src="https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572"
            alt="Story background"
          />
        </Card.Backdrop>
        <StoryHeader
          sourceAvatar="https://ik.imagekit.io/geeekg65rf/CBC_Logo_1992-Present.svg.png?updatedAt=1721232110109"
          sourceName="CBC"
        />
        <StoryFooter storyReadTime={6} storyTags={['tech', 'ai']} />
        <div className="bg-gradient-to-t from-[#0000008d] via-[#ffffff00] to-[#fff0] h-full w-full absolute top-0 z-[7]" />
      </Card>
      <StoryTitle storyTitle="A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities" />
    </Column>
  );
};

export default StoryOverview;
