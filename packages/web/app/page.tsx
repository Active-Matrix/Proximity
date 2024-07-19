'use client';
import { NewsPreview, Topics, Header } from '@/components/sections';
import { StoriesSkeleton } from '@/components/skeleton';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// skeleton
const Stories = dynamic(() => import('@/components/sections/Stories/Stories'), {
  ssr: false,
  loading: () => <StoriesSkeleton />,
});

export default function Home() {
  return (
    <main className="flex flex-col gap-5 pb-24">
      <Header />
      <Suspense fallback={<StoriesSkeleton />}>
        <Stories />
      </Suspense>

      <div className="flex-center flex-col gap-2">
        <Topics />
        <NewsPreview />
      </div>
    </main>
  );
}
