'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoMoon, GoSun } from 'react-icons/go';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Craft', href: '/craft' },
];

const spring = { type: 'spring', stiffness: 380, damping: 30 } as const;

export default function NavBar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white p-4 transition-colors duration-300 dark:bg-gray-800">
      <ul
        className="flex items-center"
        onMouseLeave={() => setHoveredHref(null)}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onMouseEnter={() => setHoveredHref(link.href)}
                onFocus={() => setHoveredHref(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative block px-3 py-2 transition-colors duration-300 ${
                  isActive
                    ? 'text-gray-900 dark:text-gray-50'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                }`}
              >
                {/*
                 * Both highlights are painted before the label and lifted out
                 * of the way with a positive z-index on the label itself. A
                 * negative z-index here would drop them behind the nav's own
                 * background, since `relative` alone creates no stacking
                 * context for them to sit inside.
                 */}
                {hoveredHref === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-md bg-gray-100 dark:bg-gray-700/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={spring}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-700"
                    transition={spring}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
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
