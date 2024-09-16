import React from 'react';

type CreditProps = {
  children: React.ReactNode;
};

export default function Credit({ children }: CreditProps) {
  return <p className="low-contrast-text mt-12">{children}</p>;
}
