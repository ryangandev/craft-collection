import { format } from 'date-fns/format';
import Link from 'next/link';

import { getSortedCraftsMetadata } from '@/lib/content';
import { cn } from '@/lib/utils';

export default async function Home() {
  const { craftsMetadata, years } = await getSortedCraftsMetadata();

  return (
    <main className="">
      <h1 className="mb-7 whitespace-nowrap">Craft Collection</h1>
      <p className="mb-16 text-neutral-500 dark:text-neutral-400">
        My stash of cool components I&apos;ve saved from various projects over
        time.
      </p>

      <section className="group">
        {years.map((year) => (
          <ul key={year} className="border-t">
            {craftsMetadata
              .filter((craft) => new Date(craft.date).getFullYear() === year)
              .map((craft, index) => (
                <li key={craft.name} className={cn('group/item py-3')}>
                  <Link href={craft.slug} className="relative flex">
                    <span className="absolute text-neutral-400 dark:text-neutral-500">
                      {index === 0 ? year : null}
                    </span>
                    <div
                      className={cn(
                        'ml-[70px] flex w-full items-center justify-between transition-opacity md:ml-[160px]',
                        'group-hover/item:opacity-100 group-hover:opacity-50',
                      )}
                    >
                      <p>{craft.name}</p>
                      <span className="mx-2 text-sm text-neutral-400 dark:text-neutral-500">
                        {format(craft.date, 'MM/dd')}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        ))}
      </section>
    </main>
  );
}
