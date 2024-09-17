import { format } from 'date-fns/format';
import { Link } from 'next-view-transitions';

import AnimatedLink from '@/components/animated-link';
import { getSortedCraftsMetadata } from '@/lib/content';
import { cn } from '@/lib/utils';
import Credits from '@/components/credits';

export default async function Home() {
  const { craftsMetadata, years } = await getSortedCraftsMetadata();

  return (
    <main className="space-y-12 md:space-y-16">
      <div>
        <h1 className="heading">Craft Collection</h1>
        <p className="description">
          My stash of cool components I&apos;ve saved from various projects over
          time.
        </p>
      </div>

      <section className="group">
        {years.map((year) => (
          <ul key={year} className="group/section border-t">
            {craftsMetadata
              .filter((craft) => new Date(craft.date).getFullYear() === year)
              .map((craft, index) => (
                <li key={craft.name}>
                  <Link
                    href={craft.slug}
                    className={cn(
                      'group/item relative flex py-3',
                      index !== 0 &&
                        "after:absolute after:left-[70px] after:right-0 after:top-0 after:h-px after:bg-border after:content-[''] md:after:left-[160px]",
                    )}
                  >
                    <span
                      className={cn(
                        'low-contrast-text absolute',
                        'transition-colors group-hover/section:text-neutral-900 dark:group-hover/section:text-neutral-100',
                      )}
                    >
                      {index === 0 ? year : null}
                    </span>
                    <div
                      className={cn(
                        'ml-[70px] flex w-full items-center justify-between transition-opacity md:ml-[160px]',
                        'group-hover/item:!opacity-100 group-hover:opacity-50',
                      )}
                    >
                      <p>{craft.name}</p>
                      <span className="low-contrast-text mx-2 text-sm">
                        {format(craft.date, 'MM/dd')}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        ))}
      </section>

      <Credits>
        Design inspired by{' '}
        <AnimatedLink href="https://paco.me/">Paco Coursey</AnimatedLink>
      </Credits>
    </main>
  );
}
