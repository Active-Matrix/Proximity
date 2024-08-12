import { cn } from '@/lib/utils';
import { Card, Column, Row } from '@artimisjs/ui';
import HorizontalScroll from '../ui/horizontalScroll';
import { animate } from '@/lib/skeletonAnimation';
import React from 'react';

const StoryAvatarSkeleton = () => {
  return (
    <HorizontalScroll>
      <Row className="flex justify-center items-center gap-3 lg:gap-8 px-2">
        {Array.from({ length: 18 }, (_, index) => (
          <Row
            key={index}
            className={cn(
              'h-[62px] w-[62px] lg:h-[78px] lg:w-[78px] border-[1px] border-[#DBDBDB]',
              'rounded-full overflow-hidden',
              animate
            )}
          />
        ))}
      </Row>
    </HorizontalScroll>
  );
};

const StoryOverviewBlock = () => {
  return (
    <Column
      className={cn(
        'gap-3 lg:gap-4 w-[94vw] lg:w-full scroll-snap-center pb-[.9rem]'
      )}
    >
      <Card
        height="fit"
        width="full"
        radius="xxl"
        className={cn(
          'h-[26vh] lg:h-[32vh] w-full text-wrap lg:rounded-none',
          animate
        )}
      >
        <Card.Backdrop className="h-full w-full" />
      </Card>

      <Row
        className={cn(
          'flex justify-center items-center gap-2 h-4 mx-2 lg:mx-1 w-[90]',
          animate
        )}
      />
      <Row
        className={cn(
          'flex justify-center items-center gap-2 h-4 mx-2 lg:mx-1 mb-[.18rem] w-[50%]',
          animate
        )}
      />
    </Column>
  );
};

const StoryOverviewSkeleton = () => {
  return (
    <>
      <HorizontalScroll
        className={
          'hidden lg:flex px-2 gap-3 scroll-snap-horizontal lg:pr-4 lg:justify-between'
        }
      >
        <StoryOverviewBlock />
        <StoryOverviewBlock />
        <StoryOverviewBlock />
      </HorizontalScroll>

      <div className={'flex lg:hidden px-2 flex-center'}>
        <StoryOverviewBlock />
      </div>
    </>
  );
};

const StoriesSkeleton = () => {
  return (
    <Column
      align="start"
      className="gap-4 lg:gap-6 w-full lg:w-[76%] lg:mt-2 lg:overflow-x-hidden"
    >
      <StoryAvatarSkeleton />
      <StoryOverviewSkeleton />
    </Column>
  );
};
export { StoriesSkeleton, StoryAvatarSkeleton, StoryOverviewSkeleton };
