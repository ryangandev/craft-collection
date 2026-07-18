import React from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import AnimatedLink from '@/components/animated-link';
import CopyButton from '@/components/copy-button';
import Credits from '@/components/credits';
import DemoContainer from '@/components/demo-container';
import NavBarDemo from '@/components/navbar-demo';
import CustomCode from '@/components/mdx/custom-code';
import CustomImage from '@/components/mdx/custom-image';
import CustomLink from '@/components/mdx/custom-link';
import CustomPre from '@/components/mdx/custom-pre';
import '@/styles/mdx.css';

type MdxProps = {
  source: MDXRemoteProps['source'];
};

const components = {
  h2: ({ children, ...props }) => (
    <h2 className="heading-2-block" {...props}>
      {children}
    </h2>
  ),
  a: CustomLink,
  code: CustomCode,
  img: CustomImage,
  pre: CustomPre,
  AnimatedLink,
  CopyButton,
  Credits,
  DemoContainer,
  NavBarDemo,
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
