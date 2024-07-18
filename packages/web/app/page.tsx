import { NewsPreview, Stories, Topics, Header } from '@/components/sections';

export default function Home() {
  return (
    <main className="flex flex-col gap-5 pb-24">
      <Header />
      <Stories />

      <div className="flex-center flex-col gap-2">
        <Topics />
        <NewsPreview />
      </div>
    </main>
  );
}
