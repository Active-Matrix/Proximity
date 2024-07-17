import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full h-full rounded-3xl border-input py-2 p-[1px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-[16px] placeholder:font-[450] placeholder:text-[16px] placeholder:text-[#667085] outline-none  disabled:cursor-not-allowed bg-transparent text-[#4e5566] text-[18px] font-[450]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
