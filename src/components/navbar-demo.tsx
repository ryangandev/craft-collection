'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoMoon, GoSun } from 'react-icons/go';

/**
 * Demo-only variant of `navbar.tsx`.
 *
 * The real component derives the active link from `usePathname()`, which would
 * leave this preview inert — no craft route matches one of the nav links, so
 * the highlight would never render, and clicking one would navigate away from
 * the page. Tracking the active link in state instead keeps the shared
 * `layoutId` animation visible, which is the point of the craft.
 *
 * The layout ids are prefixed so they can never pair up with a real NavBar
 * rendered on the same page.
 */
const links = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Craft', href: '/craft' },
];

const spring = { type: 'spring', stiffness: 380, damping: 30 } as const;

export default function NavBarDemo() {
  const [activeHref, setActiveHref] = useState('/');
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between rounded-md bg-white p-4 transition-colors duration-300 dark:bg-gray-800">
      <ul
        className="flex items-center"
        onMouseLeave={() => setHoveredHref(null)}
      >
        {links.map((link) => {
          const isActive = activeHref === link.href;

          return (
            <li key={link.href}>
              <button
                onClick={() => setActiveHref(link.href)}
                onMouseEnter={() => setHoveredHref(link.href)}
                onFocus={() => setHoveredHref(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative block px-3 py-2 transition-colors duration-300 ${
                  isActive
                    ? 'text-gray-900 dark:text-gray-50'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                }`}
              >
                {hoveredHref === link.href && (
                  <motion.span
                    layoutId="demo-nav-hover"
                    className="absolute inset-0 rounded-md bg-gray-100 dark:bg-gray-700/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={spring}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="demo-nav-active"
                    className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-700"
                    transition={spring}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle theme"
        className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200"
      >
        {isDarkMode ? <GoSun size={20} /> : <GoMoon size={20} />}
      </button>
    </nav>
  );
}
