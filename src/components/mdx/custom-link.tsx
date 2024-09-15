import React from 'react';
import Link, { LinkProps } from 'next/link';

import AnimatedExternalLink from '@/components/animated-external-link';

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
    <AnimatedExternalLink href={href} {...props}>
      {children}
    </AnimatedExternalLink>
  );
}
