import React from 'react';

type CreditsProps = {
  children: React.ReactNode;
};

export default function Credits({ children }: CreditsProps) {
  return <p className="color-level-5 mt-14">{children}</p>;
}
