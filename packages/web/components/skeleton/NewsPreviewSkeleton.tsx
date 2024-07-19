import { animate } from '@/lib/skeletonAnimation';
import { cn } from '@/lib/utils';
import { Card, Column, Row } from '@artimisjs/ui';
import React from 'react';

const NewsPreviewSkeleton = () => {
  return (
    <Card width="full" height="fit" className="bg-transparent p-2 flex-center">
      <Row
        align="center"
        className="py-2 pb-4 border-b-[1px] justify-start gap-2 w-full"
      >
        <div
          className={cn('h-32 min-w-32 w-32 max-w-32 rounded-2xl', animate)}
        />
        <Column className="w-full gap-2">
          <Row
            className={cn(
              'flex justify-center items-center gap-2 h-4 mx-2 w-[90%]',
              animate
            )}
          />
          <Row
            className={cn(
              'flex justify-center items-center gap-2 h-4 mx-2 w-[90%]',
              animate
            )}
          />
          <Row
            className={cn(
              'flex justify-center items-center gap-2 h-4 mx-2 w-[50%]',
              animate
            )}
          />

          <Row className="flex-center-between pr-4 mt-3">
            <Row
              className={cn(
                'flex justify-center items-center gap-2 h-4 mx-2 w-[20%]',
                animate
              )}
            />
            <Row
              className={cn(
                'flex justify-center items-center gap-2 h-4 mx-2 w-[20%]',
                animate
              )}
            />
          </Row>
        </Column>
      </Row>
    </Card>
  );
};

export { NewsPreviewSkeleton };
