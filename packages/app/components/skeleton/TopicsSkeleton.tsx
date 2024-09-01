import { cn } from '@/lib/utils';
import { Row } from '@artimisjs/ui';
import React from 'react';
import HorizontalScroll from '../ui/horizontalScroll';
import { animate } from '@/lib/skeletonAnimation';

const TopicsSkeleton = () => {
  return (
    <section className="mt-4 w-screen lg:w-full lg:mt-0 overflow-x-hidden">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2 pr-20">
          {Array.from({ length: 6 }, (_, index) => (
            <Row
              key={index}
              className={cn(
                'w-24 h-10 rounded-[30px] gap-1 border-[1px] select-none',
                animate
              )}
            ></Row>
          ))}
        </Row>
      </HorizontalScroll>
    </section>
  );
};

export default TopicsSkeleton;
