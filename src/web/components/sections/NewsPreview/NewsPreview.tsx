'use client';
import PreviewCard from '@/components/ui/previewCard';
import { GlobalContext } from '@/context/contextManager';
import { getNewsPreview } from '@/utils/getNewsPreview';
import React, { useContext, useEffect, useState } from 'react';
import { Column } from '@artimisjs/ui';
import { NewsPreviewSkeleton } from '@/components/skeleton';

const NewsPreview = () => {
  const { selectedTopic, newsPreview, setNewsPreview } =
    useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);

      const delay = new Promise((resolve) => setTimeout(resolve, 350));
      const newsPromise = getNewsPreview(selectedTopic);
      const [res] = await Promise.all([newsPromise, delay]);

      setNewsPreview(res);
      setIsLoading(false);
    };

    fetchNews();
  }, [selectedTopic]);

  if (isLoading) {
    return (
      <Column className="gap-4 w-full">
        {[...Array(5)].map((_, index) => (
          <NewsPreviewSkeleton key={index} />
        ))}
      </Column>
    );
  }

  return (
    <section className="flex flex-col items-start w-full">
      {newsPreview?.map((news, index) => (
        <PreviewCard
          key={`${index}-${news.href}`}
          href={news.href}
          tags={news.tags}
          readTime={news.readTime}
          src={news.src}
          title={news.title}
        />
      ))}
    </section>
  );
};

export default NewsPreview;
