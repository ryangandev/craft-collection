import React from 'react';
import dynamic from 'next/dynamic';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import AnimatedExternalLink from '@/components/animated-external-link';
import Credit from '@/components/credit';
import DemoContainer from '@/components/demo-container';
import LoadingContainer from '@/components/loading-container';
import CustomImage from '@/components/mdx/custom-image';
import CustomLink from '@/components/mdx/custom-link';
import '@/styles/mdx.css';

// Needs to be imported dynamically because it's a client component
const CustomCode = dynamic(() => import('@/components/mdx/custom-code'), {
  ssr: false,
});
const CustomPre = dynamic(() => import('@/components/mdx/custom-pre'), {
  ssr: false,
  loading: () => <LoadingContainer />,
});

type MdxProps = {
  source: MDXRemoteProps['source'];
};

const components = {
  h2: ({ children, ...props }) => (
    <h2 className="heading-2 font-medium" {...props}>
      {children}
    </h2>
  ),
  a: CustomLink,
  code: CustomCode,
  img: CustomImage,
  pre: CustomPre,
  AnimatedExternalLink,
  Credit,
  DemoContainer,
} as MDXRemoteProps['components'];

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'min-light',
            dark: 'vesper',
          },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
} as MDXRemoteProps['options'];

export default function Mdx({ source, ...props }: MdxProps) {
  return (
    <MDXRemote
      {...props}
      source={source}
      components={components}
      options={options}
    />
  );
}
