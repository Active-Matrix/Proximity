import { NewsPreview, Stories, Topics, Header } from '@/components/sections';
import { Column } from '@artimisjs/ui';

export default function Home() {
  return (
    <main className="flex flex-col gap-5 pb-24">
      <Column className="gap-4">
        <Header />
        <Stories />
      </Column>

      <div className="flex-center flex-col gap-2">
        <Topics />
        <NewsPreview />
      </div>
    </main>
  );
}
