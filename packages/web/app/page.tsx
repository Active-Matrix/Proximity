import { NewsPreview, Stories, Topics } from '@/components/sections';

export default function Home() {
  return (
    <main className="flex flex-col mt-4 gap-4 pb-24">
      <Stories />
      <Topics />
      <NewsPreview />
    </main>
  );
}
