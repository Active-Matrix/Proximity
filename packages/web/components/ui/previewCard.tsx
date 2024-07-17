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

const PreviewCard = ({
  title,
  src,
  tags,
  readTime,
  href,
}: PreviewCardProps) => {
  return (
    <Link href={href}>
      <Card width="full" height="fit" className="bg-transparent p-2">
        <Row
          align="center"
          className="p-2 rounded-[1.5rem] justify-start shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-2"
        >
          <Image
            src={src}
            alt=""
            height={120}
            width={120}
            className="h-32 w-32 rounded-[1rem] object-cover object-center"
          />

          <Column align="start">
            <Text
              className="p-1 line-clamp-3 overflow-hidden font-semibold"
              size="lg"
            >
              {title}
            </Text>

            <Row className="w-full justify-between pr-2 opacity-70">
              <Text
                className="p-1 overflow-hidden font-semibold line-clamp-1 text-nowrap w-[60%]"
                size="xs"
              >
                {tags.map((tag) => (
                  <span key={tag} className="mr-1">
                    #{tag}
                  </span>
                ))}
              </Text>
              <Text
                className="p-1 line-clamp-4 overflow-hidden font-semibold"
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

export default PreviewCard;
