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

export default function NavBar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white p-4 transition-colors duration-300 dark:bg-gray-800">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="relative px-3 py-2 text-gray-700 transition-colors duration-300 dark:text-gray-200"
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  className="absolute inset-0 z-[-1] rounded-md bg-gray-100 dark:bg-gray-700"
                  layoutId="background"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
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
