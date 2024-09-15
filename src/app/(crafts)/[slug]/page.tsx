import BreadcrumbHeading from '@/components/breadcrumb-heading';
import DemoContainer from '@/components/demo-container';
import { getAllCraftsSlugs } from '@/lib/content';

export async function generateStaticParams() {
  const slugs = await getAllCraftsSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default function Page() {
  return (
    <main>
      <BreadcrumbHeading name="Animated Navbar" />
      <DemoContainer name="Animated Navbar" />
    </main>
  );
}
