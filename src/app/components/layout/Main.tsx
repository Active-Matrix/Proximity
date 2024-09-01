import React, { PropsWithChildren } from 'react';

const Main = ({ children }: PropsWithChildren) => {
  return <main className="flex flex-col gap-5 lg:gap-6 pb-32">{children}</main>;
};

export default Main;
