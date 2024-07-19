'use client';
import { Header } from '@/components/sections';
import {
  NewsPreviewSkeleton,
  StoriesSkeleton,
  TopicsSkeleton,
} from '@/components/skeleton';
import { Column } from '@artimisjs/ui';
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

const NewsPreview = dynamic(
  () => import('@/components/sections/NewsPreview/NewsPreview'),
  {
    ssr: false,
    loading: () => (
      <Column className="gap-4 w-full">
        {[...Array(5)].map((_, index) => (
          <NewsPreviewSkeleton key={index} />
        ))}
      </Column>
    ),
  }
);

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

        <Suspense fallback={<NewsPreviewSkeleton />}>
          <NewsPreview />
        </Suspense>
      </div>
    </main>
  );
}
