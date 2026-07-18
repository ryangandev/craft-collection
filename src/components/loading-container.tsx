import React from 'react';
import { LuLoaderCircle } from 'react-icons/lu';

import { cn } from '@/lib/utils';

export default function LoadingContainer() {
  return (
    <div
      className={cn(
        'flex min-h-[350px] w-full items-center justify-center rounded-md border text-base',
      )}
    >
      <LuLoaderCircle className="mr-2 animate-spin" />
      Loading
    </div>
  );
}
