import { Card } from '@artimisjs/ui';
import React from 'react';
import StoryFooter from '../Stories/StoryFooter';
import StoryImage from '../Stories/StoryImage';

interface NewsCoverImageProps {
  newsImageUrl: string;
  newsAltText: string;
  newsReadTime: number;
  newsTags: string[];
}

const NewsCoverImage = ({
  newsAltText,
  newsImageUrl,
  newsReadTime,
  newsTags,
}: NewsCoverImageProps) => {
  return (
    <Card height="fit" width="full" radius="xxl" className="min-h-44">
      <Card.Backdrop className="h-full w-full">
        <StoryImage src={newsImageUrl} alt={newsAltText} />
      </Card.Backdrop>
      <StoryFooter storyReadTime={newsReadTime} storyTags={newsTags} />
      <div
        className="bg-gradient-to-t from-[#0000008d] via-[#ffffff00] to-[#fff0] 
        h-full w-full absolute top-0 z-[7]"
      />
    </Card>
  );
};

export default NewsCoverImage;
