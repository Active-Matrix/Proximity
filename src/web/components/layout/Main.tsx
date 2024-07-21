import React, { PropsWithChildren } from 'react';

const Main = ({ children }: PropsWithChildren) => {
  return <main className="flex flex-col gap-5 pb-32">{children}</main>;
};

export default Main;