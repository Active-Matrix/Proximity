import React, { PropsWithChildren } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type SnapScroppProps = PropsWithChildren & HTMLMotionProps<'div'>;

const SnapScroll = ({ children, ...props }: SnapScroppProps) => (
  <motion.div className="h-[100vh]" {...props}>
    {children}
  </motion.div>
);

export default SnapScroll;
