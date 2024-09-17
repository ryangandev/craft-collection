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
        'flex min-h-[350px] w-full flex-col items-center justify-center gap-8 rounded-md border p-10',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
