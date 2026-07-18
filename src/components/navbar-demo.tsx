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
 */
const links = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Craft', href: '/craft' },
];

export default function NavBarDemo() {
  const [activeHref, setActiveHref] = useState('/');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between rounded-md bg-white p-4 transition-colors duration-300 dark:bg-gray-800">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => setActiveHref(link.href)}
              className="relative px-3 py-2 text-gray-700 transition-colors duration-300 dark:text-gray-200"
            >
              {link.name}
              {activeHref === link.href && (
                <motion.div
                  className="absolute inset-0 z-[-1] rounded-md bg-gray-100 dark:bg-gray-700"
                  layoutId="demo-background"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200"
      >
        {isDarkMode ? <GoSun size={20} /> : <GoMoon size={20} />}
      </button>
    </nav>
  );
}
