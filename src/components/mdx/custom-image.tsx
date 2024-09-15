import React from 'react';
import Image, { ImageProps } from 'next/image';

export default function CustomImage({ ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt || ''}
      width={0}
      height={0}
      sizes="(max-width: 644px) 100%"
      className="h-auto w-full rounded-lg shadow-md"
      quality={95}
      placeholder="blur"
      blurDataURL="/blur.svg"
    />
  );
}
