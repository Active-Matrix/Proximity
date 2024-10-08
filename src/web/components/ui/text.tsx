import React, { forwardRef } from 'react';
type TextProps = {
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
    | 'banner';
  children: React.ReactNode;
  className?: string;
};

const sizes = {
  xs: {
    fontSize: 13,
    lineHeight: 20 / 12,
  },
  sm: {
    fontSize: 14,
    lineHeight: 22 / 14,
  },
  md: {
    fontSize: 16.5,
    lineHeight: 20 / 14,
  },
  lg: {
    fontSize: 18,
    lineHeight: 28 / 20,
  },
  xl: {
    fontSize: 19.6,
    lineHeight: 32 / 24,
  },
  xxl: {
    fontSize: 26,
    lineHeight: 30 / 30,
  },
  xxxl: {
    fontSize: 27,
    lineHeight: 46 / 38,
  },
  huge: {
    fontSize: 40,
    lineHeight: 54 / 46,
  },
  xhuge: {
    fontSize: 56,
    lineHeight: 64 / 56,
  },
  xxhuge: {
    fontSize: 68,
    lineHeight: 76 / 68,
  },
  banner: {
    fontSize: 308,
    lineHeight: 82 / 68,
  },
};

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ size = 'md', children, className }, ref) => {
    const fontStyle = sizes[size];

    return (
      <div
        ref={ref}
        className={`text-[${size}] ${className}`}
        style={{
          fontSize: `${fontStyle.fontSize}px`,
          lineHeight: `${fontStyle.lineHeight}`,
        }}
      >
        {children}
      </div>
    );
  }
);

export { Text };
export type { TextProps };
