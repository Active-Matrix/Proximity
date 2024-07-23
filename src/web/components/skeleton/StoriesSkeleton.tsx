import { cn } from '@/lib/utils';
import { Card, Column, Row } from '@artimisjs/ui';
import HorizontalScroll from '../ui/horizontalScroll';
import { animate } from '@/lib/skeletonAnimation';
import React from 'react';

const StoryAvatarSkeleton = () => {
  return (
    <HorizontalScroll>
      <Row className="flex justify-center items-center gap-2 px-2 ">
        {Array.from({ length: 6 }, (_, index) => (
          <Row
            key={index}
            className={cn(
              'h-[62px] w-[62px] border-[1px] border-[#DBDBDB]',
              'rounded-full overflow-hidden',
              animate
            )}
          />
        ))}
      </Row>
    </HorizontalScroll>
  );
};

const StoryOverviewSkeleton = () => {
  return (
    <Column className="gap-3 px-3 w-full">
      <Card
        height="fit"
        width="full"
        radius="xxl"
        className={cn('h-[26vh]', animate)}
      >
        <Card.Backdrop className="h-full w-full" />
      </Card>

      <Row
        className={cn(
          'flex justify-center items-center gap-2 h-4 mx-2 w-[90%]',
          animate
        )}
      />
      <Row
        className={cn(
          'flex justify-center items-center gap-2 h-4 mx-2 mb-[.18rem] w-[50%]',
          animate
        )}
      />
    </Column>
  );
};

const StoriesSkeleton = () => {
  return (
    <Column align="start" className="gap-4">
      <StoryAvatarSkeleton />
      <StoryOverviewSkeleton />
    </Column>
  );
};
export { StoriesSkeleton, StoryAvatarSkeleton, StoryOverviewSkeleton };
