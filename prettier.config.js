/**
 * Previously sourced from `@vercel/style-guide/prettier`, which is inlined here
 * because that package's peer ranges cap out at ESLint 8 / Next 14.
 *
 * The first four options are Prettier defaults that an EditorConfig file could
 * otherwise override, so they are set explicitly.
 *
 * @type {import('prettier').Config}
 */
module.exports = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  singleQuote: true,
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
  // Tailwind v4 has no JS config; the class sorter reads the CSS entry instead.
  tailwindStylesheet: './src/styles/globals.css',
};
