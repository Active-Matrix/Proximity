import { Row } from '@artimisjs/ui';
import React, { PropsWithChildren } from 'react';

const HorizontalScroll = ({ children }: PropsWithChildren) => {
  return (
    <Row className="w-screen overflow-x-scroll whitespace-nowrap">
      {children}
    </Row>
  );
};

export default HorizontalScroll;
