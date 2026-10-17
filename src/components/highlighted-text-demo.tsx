'use client';

import { useState } from 'react';

import HighlightedText from '@/components/highlighted-text';

const items = [
  'Full-stack helpdesk with real-time ticket updates (Next.js)',
  'Multiplayer drawing game over WebSockets (Socket.IO)',
  'Personal finance tracker for iPhone and the web (SwiftUI)',
];

/** A search box over a short list, so the highlight follows what is typed */
export default function HighlightedTextDemo() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try “time”, “(” or “.”"
        aria-label="Search the list"
        className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      />
      <ul className="flex flex-col gap-2 text-sm color-level-2">
        {items.map((item) => (
          <li key={item}>
            <HighlightedText text={item} highlightedString={query} />
          </li>
        ))}
      </ul>
    </div>
  );
}
