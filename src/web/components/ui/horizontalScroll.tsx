import { cn } from '@/lib/utils';
import { Row } from '@artimisjs/ui';
import React, { HTMLProps, PropsWithChildren } from 'react';

interface HorizontalScrollProps
  extends PropsWithChildren,
    HTMLProps<HTMLDivElement> {}

const HorizontalScroll = ({
  children,
  className,
  ...rest
}: HorizontalScrollProps) => {
  return (
    <Row
      className={cn('w-screen overflow-x-scroll whitespace-nowrap', className)}
      {...rest}
    >
      {children}
    </Row>
  );
};

export default HorizontalScroll;
