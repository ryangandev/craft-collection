import React from 'react';

type CreditsProps = {
  children: React.ReactNode;
};

export default function Credits({ children }: CreditsProps) {
  return <p className="low-contrast-text mt-12">{children}</p>;
}
