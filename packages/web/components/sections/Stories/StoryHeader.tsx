import React from 'react';
import { Card, Row, Text } from '@artimisjs/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from 'next/image';
import StoryBookMark from './StoryBookMark';

interface StoryHeaderProps {
  sourceName: string;
  sourceAvatar: string | StaticImageData;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({
  sourceName,
  sourceAvatar,
}) => (
  <Card.Header className="p-4 top-0 flex justify-between items-center w-full">
    <StoryBookMark />

    <Row align="center" className="bg-white p-2 px-5 rounded-3xl gap-1">
      <Text size="lg" className="font-semibold">
        {sourceName}
      </Text>
      <Image
        src={sourceAvatar}
        alt={`${sourceName} logo`}
        height={32}
        width={32}
        className="w-4 h-4 object-cover object-center"
      />
    </Row>
  </Card.Header>
);

export default StoryHeader;
