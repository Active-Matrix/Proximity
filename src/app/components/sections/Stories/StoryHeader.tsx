import React from 'react';
import { Card, Row } from '@artimisjs/ui';
import Image, { StaticImageData } from 'next/image';
import { Text } from '@/components/ui/text';
import StoryBookMark from './StoryBookMark';

interface StoryHeaderProps {
  sourceName: string;
  sourceAvatar: string | StaticImageData;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({
  sourceName,
  sourceAvatar,
}) => (
  <Card.Header className="p-4 top-0 flex justify-between items-center w-full lg:hidden">
    <StoryBookMark />

    <Row
      align="center"
      className="bg-white p-2 px-5 rounded-3xl gap-1 w-24 h-10"
    >
      <Text size="lg" className="font-semibold">
        {sourceName}
      </Text>
      <Image
        src={sourceAvatar}
        alt={`${sourceName} logo`}
        height={32}
        width={32}
        className="w-5 h-5 object-scale-down object-center"
      />
    </Row>
  </Card.Header>
);

export default StoryHeader;
