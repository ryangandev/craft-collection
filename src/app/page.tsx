import Link from 'next/link';
import { format } from 'date-fns/format';

import { gallery } from '@/data/gallery';

export default function Home() {
  return (
    <main className="">
      <h1 className="mb-7 whitespace-nowrap">Craft Collection</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        My stash of cool components I&apos;ve saved from various projects over
        time.
      </p>

      <h1 className="mb-4 mt-16">2024</h1>
      <ul className="group">
        {gallery.map((craft) => (
          <li key={craft.name} className="rounded-xl py-3">
            <Link
              href={craft.url}
              className="flex items-center justify-between transition-opacity hover:!opacity-100 group-hover:opacity-60"
            >
              <h2 className="font-medium text-neutral-900/80 dark:text-neutral-300/80">
                {craft.name}
              </h2>
              <span className="mx-2 text-sm text-neutral-500">
                {format(craft.date, 'MM/dd')}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
