import { animate } from '@/lib/skeletonAnimation';
import { cn } from '@/lib/utils';
import { Card, Column, Row } from '@artimisjs/ui';
import React from 'react';

const PreviewCardSkeleton = () => {
  return (
    <Card
      width="full"
      height="full"
      className="bg-transparent p-2 flex items-center justify-center rounded-2xl lg:justify-between"
    >
      <div className="flex flex-row lg:flex-col py-2 pb-4 justify-start gap-2 w-full border-b-[1px] lg:border-none">
        <div
          className={cn(
            'h-32 min-w-32 w-32 max-w-32 rounded-2xl lg:w-full lg:min-w-full lg:max-w-full lg:rounded-none lg:h-52 overflow-hidden',
            animate
          )}
        />
        <Column className="w-full gap-2 mt-2 lg:mt-0">
          <Row
            className={cn(
              'flex justify-center items-center gap-2 lg:gap-3 h-4 mx-2 lg:mx-1 w-[90%] lg:w-[96%]',
              animate
            )}
          />
          <Row
            className={cn(
              'flex justify-center items-center gap-2 lg:gap-3 h-4 mx-2 lg:mx-1 w-[90%] lg:w-[96%]',
              animate
            )}
          />
          <Row
            className={cn(
              'flex justify-center items-center gap-2 lg:gap-3 h-4 mx-2 lg:mx-1 w-[50%] lg:w-[70%]',
              animate
            )}
          />

          <Row className="flex-center-between pr-4 mt-3 lg:mt-5">
            <Row
              className={cn(
                'flex justify-center items-center gap-2 h-4 mx-2 lg:mx-1 w-[20%]',
                animate
              )}
            />
            <Row
              className={cn(
                'flex justify-center items-center gap-2 h-4 mx-2 w-[20%] lg:mx-1',
                animate
              )}
            />
          </Row>
        </Column>
      </div>
    </Card>
  );
};

const NewsPreviewSkeleton = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 w-full">
      {[...Array(8)].map((_, index) => (
        <PreviewCardSkeleton key={index} />
      ))}
    </section>
  );
};

export { NewsPreviewSkeleton };
