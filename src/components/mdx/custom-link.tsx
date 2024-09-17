import React from 'react';
import Link, { LinkProps } from 'next/link';

import AnimatedLink from '@/components/animated-link';

type CustomLinkProps = LinkProps & {
  href: string;
  children: React.ReactNode;
};

export default function CustomLink({
  href,
  children,
  ...props
}: CustomLinkProps) {
  if (href.startsWith('#')) {
    return <Link {...props} href={href} />;
  }

  return (
    <AnimatedLink href={href} {...props}>
      {children}
    </AnimatedLink>
  );
}
