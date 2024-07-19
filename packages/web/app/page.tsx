'use client';
import { NewsPreview, Header } from '@/components/sections';
import { StoriesSkeleton } from '@/components/skeleton';
import TopicsSkeleton from '@/components/skeleton/TopicsSkeleton';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// skeleton
const Stories = dynamic(() => import('@/components/sections/Stories/Stories'), {
  ssr: false,
  loading: () => <StoriesSkeleton />,
});

const Topics = dynamic(() => import('@/components/sections/Topics/Topics'), {
  ssr: false,
  loading: () => (
    <div className="mt-4">
      <TopicsSkeleton />
    </div>
  ),
});

export default function Home() {
  return (
    <main className="flex flex-col gap-5 pb-24">
      <Header />
      <Suspense fallback={<StoriesSkeleton />}>
        <Stories />
      </Suspense>

      <div className="flex-center flex-col gap-2">
        <Suspense fallback={<StoriesSkeleton />}>
          <Topics />
        </Suspense>
        <NewsPreview />
      </div>
    </main>
  );
}
