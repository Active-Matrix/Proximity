import React, { PropsWithChildren } from 'react';
import '@/styles/scrollSnap.scss';
import { Column } from '@artimisjs/ui';

type SnapScroppProps = PropsWithChildren;

const SnapScroll = ({ children, ...props }: SnapScroppProps) => {
  return (
    <Column
      className="scroll-snap-mandatory pt-4 pb-20 h-screen gap-16"
      {...props}
    >
      {children}
    </Column>
  );
};

export default SnapScroll;
