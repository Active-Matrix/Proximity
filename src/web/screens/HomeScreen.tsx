'use client';
import { AsidePreview, Header } from '@/components/sections';
import {
  NewsPreviewSkeleton,
  StoriesSkeleton,
  TopicsSkeleton,
} from '@/components/skeleton';
import { Column, Flex } from '@artimisjs/ui';
import { Main } from '@/components/layout';
import dynamic from 'next/dynamic';

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
        {[...Array(3)].map((_, index) => (
          <NewsPreviewSkeleton key={index} />
        ))}
      </Column>
    ),
  }
);

export default function HomeScreen() {
  return (
    <Main>
      <Header title="Proximity">
        <Header.SearchBar placeholder="Find Interesting Topics..." />
      </Header>

      <div className="flex w-full h-[61vh]">
        <Stories />
        <AsidePreview />
      </div>

      <div className="flex-center flex-col lg:flex-start gap-2">
        <Topics />
        <NewsPreview />
      </div>
    </Main>
  );
}
