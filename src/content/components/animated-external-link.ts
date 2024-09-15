const App = `import { LuArrowUpRight } from 'react-icons/lu';

type CustomLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export default function CustomLink({ children, ...props }: CustomLink) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="group font-medium underline decoration-gray-400 underline-offset-4 transition-colors hover:decoration-gray-700 dark:decoration-gray-600 dark:hover:decoration-gray-300"
    >
      {children}
      <LuArrowUpRight
        className="inline-block text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-gray-600 dark:group-hover:text-gray-300"
        size={16}
      />
    </a>
  );
}`;

const react = {
  '/animated-external-link.tsx': App,
};

export default react;
