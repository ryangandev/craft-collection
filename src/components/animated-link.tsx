import React from 'react';
import Link, { LinkProps } from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

import { cn } from '@/lib/utils';

type AnimatedLinkProps = LinkProps & {
  children: React.ReactNode;
  isInternal?: boolean;
  className?: string;
  iconClassName?: string;
};

export default function AnimatedLink({
  children,
  isInternal = false,
  className,
  iconClassName,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      {...props}
      target={isInternal ? '_self' : '_blank'}
      className={cn(
        'group underline decoration-gray-400 underline-offset-4 transition-colors hover:decoration-gray-700 dark:decoration-gray-600 dark:hover:decoration-gray-300',
        // 'group no-underline',
        className,
      )}
    >
      {/* <span
        className={cn(
          'relative transition-colors after:absolute after:-bottom-[2px] after:left-0 after:right-0 after:h-px after:bg-gray-400 after:content-[""] after:group-hover:bg-gray-700 dark:after:bg-gray-600 dark:after:group-hover:bg-gray-300',
        )}
      > */}
      {children}
      {/* </span> */}
      {!isInternal && (
        <LuArrowUpRight
          className={cn(
            'inline-block text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-gray-600 dark:group-hover:text-gray-300',
            iconClassName,
          )}
          size={16}
        />
      )}
    </Link>
  );
}
