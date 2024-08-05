import { Card, Column, Row } from '@artimisjs/ui';
import { Text } from './text';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface PreviewCardProps {
  title: string;
  src: string;
  tags: string[];
  readTime: number;
  href: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({
  title,
  src,
  tags,
  readTime,
  href,
}) => {
  return (
    <Link href={href} className="w-full">
      <Card
        width="full"
        height="fit"
        className="bg-transparent p-2 flex items-start justify-start lg:w-[24vw] lg:border rounded-2xl"
      >
        <Row
          align="center"
          className="py-2 pb-4 border-b-[1px] lg:border-none justify-start gap-2 w-full lg:flex-col lg:justify-start lg:items-start lg:p-0"
        >
          <Image
            src={src}
            alt={title}
            height={300}
            width={300}
            className="h-32 min-w-32 w-32 max-w-32 rounded-2xl object-cover object-center lg:max-w-full lg:min-w-full lg:h-52"
          />
          <Column className="h-32 pb-2 w-full justify-between">
            <Text
              className="p-1 line-clamp-3 overflow-hidden font-[500] text-[#343434]"
              size="md"
            >
              {title}
            </Text>
            <Row className="w-full justify-between pr-4 opacity-70">
              <Tags tags={tags} />
              <Text
                className="p-1 line-clamp-4 overflow-hidden font-[500]"
                size="xs"
              >
                {readTime} min read
              </Text>
            </Row>
          </Column>
        </Row>
      </Card>
    </Link>
  );
};

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Text
      className="p-1 overflow-hidden font-[500] line-clamp-1 text-nowrap w-[60%]"
      size="xs"
    >
      {tags.map((tag) => (
        <span key={tag} className="mr-1">
          #{tag}
        </span>
      ))}
    </Text>
  );
};

export default PreviewCard;
