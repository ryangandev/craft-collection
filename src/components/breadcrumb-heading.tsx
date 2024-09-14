import React from 'react';
import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';

import { cn } from '@/lib/utils';

type BreadcrumbHeadingProps = {
  name: string;
};

export default function BreadcrumbHeading({ name }: BreadcrumbHeadingProps) {
  return (
    <div className="mb-7 flex items-center space-x-2">
      <Link
        href="/"
        className={cn('text-neutral-600/80 dark:text-neutral-300/60')}
      >
        <h1 className="whitespace-nowrap">Craft Collection</h1>
      </Link>
      <GoChevronRight className="flex-shrink-0" />
      <h1 className="line-clamp-1">{name}</h1>
    </div>
  );
}
