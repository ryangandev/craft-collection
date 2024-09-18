import React, { HTMLAttributes } from 'react';

import ThemeToggle from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export default function DemoContainer({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex min-h-[350px] w-full flex-col items-center justify-center gap-8 rounded-md border p-10',
        className,
      )}
      {...props}
    >
      <ThemeToggle className="absolute right-4 top-4" />
      {children}
    </div>
  );
}
