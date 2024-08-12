import { animate } from '@/lib/skeletonAnimation';
import { cn } from '@/lib/utils';
import { Card, Column, Row } from '@artimisjs/ui';
import React from 'react';

const AsidePreviewSkeleton = () => {
  return (
    <div className="bg-transparent flex items-start justify-start rounded-2xl lg:justify-between">
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
    </div>
  );
};

export { AsidePreviewSkeleton };
