import React from 'react';
import { Link } from 'next-view-transitions';
import { GoChevronRight } from 'react-icons/go';

import { cn } from '@/lib/utils';

type BreadcrumbHeadingProps = {
  name: string;
};

export default function BreadcrumbHeading({ name }: BreadcrumbHeadingProps) {
  return (
    <div className="flex items-center space-x-2">
      <Link href="/">
        <h1
          className={cn(
            'color-level-5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100',
          )}
        >
          Craft Collection
        </h1>
      </Link>
      <GoChevronRight className="flex-shrink-0" />
      <h1 className="line-clamp-1">{name}</h1>
    </div>
  );
}
