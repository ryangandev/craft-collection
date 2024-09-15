import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import BreadcrumbHeading from '@/components/breadcrumb-heading';
import Mdx from '@/components/mdx/mdx-components';
import { getAllCraftsSlugs, getCraftBySlug } from '@/lib/content';
import { CraftData } from '@/types/craft';

const getCraftsData = async (slug: string): Promise<CraftData | null> => {
  const allSlugs = await getAllCraftsSlugs();
  if (!allSlugs.includes(slug)) {
    return null;
  }

  try {
    const craft = await getCraftBySlug(slug);
    return craft;
  } catch (error) {
    console.error(`Failed to get craft: ${slug}`, error);
    return null;
  }
};

export async function generateStaticParams() {
  const slugs = await getAllCraftsSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const craft = await getCraftsData(slug);

  if (!craft) {
    return {
      title: '404 Not Found',
    };
  }

  return {
    title: craft.name,
    description: craft.description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const craft = await getCraftsData(params.slug);
  if (!craft) {
    notFound();
  }

  return (
    <main>
      <BreadcrumbHeading name={craft.name} />
      <section className="prose dark:prose-invert">
        <Mdx source={craft.content} />
      </section>
    </main>
  );
}
