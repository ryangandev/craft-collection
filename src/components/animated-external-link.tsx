import React from 'react';
import Link, { LinkProps } from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

import { cn } from '@/lib/utils';

type AnimatedLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
};

export default function AnimatedExternalLink({
  children,
  className,
  iconClassName,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group font-medium underline decoration-gray-400 underline-offset-4 transition-colors hover:decoration-gray-700 dark:decoration-gray-600 dark:hover:decoration-gray-300',
        className,
      )}
    >
      {children}
      <LuArrowUpRight
        className={cn(
          'inline-block text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-gray-600 dark:group-hover:text-gray-300',
          iconClassName,
        )}
        size={16}
      />
    </Link>
  );
}
