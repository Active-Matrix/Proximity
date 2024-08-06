import { Card, Row } from '@artimisjs/ui';
import { Text } from './text';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

interface PreviewCardProps extends PropsWithChildren {
  href: string;
  border?: boolean;
}

interface TagsProps {
  tags: string[];
}

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

const PreviewCard = ({ href, children, border = true }: PreviewCardProps) => {
  return (
    <Link href={href} className="w-full">
      <Card
        width="full"
        height="fit"
        className="bg-transparent p-2 flex items-start justify-start rounded-2xl"
      >
        <Row
          align="center"
          className={`py-2 pb-4 justify-start gap-2 w-full ${border && 'border-b-[1px]'}`}
        >
          {children}
        </Row>
      </Card>
    </Link>
  );
};

const PreviewImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={300}
      width={300}
      className="h-32 min-w-32 w-32 max-w-32 rounded-2xl object-cover object-center"
    />
  );
};

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Text
      className="p-1 line-clamp-3 overflow-hidden font-[500] text-[#343434]"
      size="md"
    >
      {title}
    </Text>
  );
};

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

const ReadTime: React.FC<{ readTime: number }> = ({ readTime }) => {
  return (
    <Text className="p-1 line-clamp-4 overflow-hidden font-[500]" size="xs">
      {readTime} min read
    </Text>
  );
};

PreviewCard.PreviewImage = PreviewImage;
PreviewCard.Title = Title;
PreviewCard.Tags = Tags;
PreviewCard.ReadTime = ReadTime;

export default PreviewCard;
