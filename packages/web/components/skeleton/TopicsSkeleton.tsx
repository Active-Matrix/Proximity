import { cn } from '@/lib/utils';
import { Row } from '@artimisjs/ui';
import React from 'react';
import HorizontalScroll from '../ui/horizontalScroll';

const TopicsSkeleton = () => {
  const animate = 'bg-slate-200 animate-pulse duration-[.5ms]';

  return (
    <HorizontalScroll>
      <Row className="flex justify-center items-center gap-2 px-2 pr-20">
        {Array.from({ length: 6 }, (_, index) => (
          <Row
            className={cn(
              'w-24 h-10 rounded-[30px] gap-1 border-[1px] select-none',
              animate
            )}
          ></Row>
        ))}
      </Row>
    </HorizontalScroll>
  );
};

export default TopicsSkeleton;
