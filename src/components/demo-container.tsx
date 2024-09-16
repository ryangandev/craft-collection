import React, { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export default function DemoContainer({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex min-h-[350px] w-full items-center justify-center rounded-md border',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
