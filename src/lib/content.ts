import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { CraftData, CraftMetadata } from '@/types/craft';

const craftsDirPath = path.join(process.cwd(), 'src', 'content', 'crafts');

/**
 * @returns An array of craft slugs
 */
export const getAllCraftsSlugs = async () => {
  // Reads the dir to get an array of filenames
  const files = await fs.promises.readdir(craftsDirPath);

  return files.map((fileName) => fileName.replace(/\.mdx$/, ''));
};

/**
 * @param slug craft's slug
 * @returns The craft metadata and content
 */
export const getCraftBySlug = async (slug: string): Promise<CraftData> => {
  const filePath = path.join(craftsDirPath, `${slug}.mdx`);
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    ...(data as Omit<CraftMetadata, 'slug'>),
    content,
  };
};

/**
 * @returns An object with an array of sorted crafts metadata and an array of unique sorted years
 */
export const getSortedCraftsMetadata = async (): Promise<{
  craftsMetadata: CraftMetadata[];
  years: number[];
}> => {
  const slugs = await getAllCraftsSlugs();
  const craftsMetadata = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(craftsDirPath, `${slug}.mdx`);
      const fileContent = await fs.promises.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug,
        ...(data as Omit<CraftMetadata, 'slug'>),
      };
    }),
  );

  const yearsSet: Set<number> = new Set(
    craftsMetadata.map((craft) => new Date(craft.date).getFullYear()),
  );

  return {
    craftsMetadata: craftsMetadata.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? -1 : 1,
    ),
    years: Array.from(yearsSet).sort((a, b) => b - a),
  };
};
