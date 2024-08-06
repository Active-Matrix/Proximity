'use client';
import PreviewCard from '@/components/ui/previewCard';
import { GlobalContext } from '@/context/contextManager';
import { getNewsPreview } from '@/utils/getNewsPreview';
import React, { useContext, useEffect, useState } from 'react';
import { Column, Row } from '@artimisjs/ui';
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
        <PreviewCard key={`${index}-${news.href}`} href={news.href}>
          <PreviewCard.PreviewImage
            src={news.src}
            alt={news.title}
            height={300}
            width={300}
            className="h-32 min-w-32 w-32 max-w-32 rounded-2xl object-cover object-center"
          />
          <Column className="h-32 pb-2 w-full justify-between">
            <PreviewCard.Title title={news.title} />

            <Row className="w-full justify-between pr-4 opacity-70">
              <PreviewCard.Tags tags={news.tags} />
              <PreviewCard.ReadTime readTime={news.readTime} />
            </Row>
          </Column>
        </PreviewCard>
      ))}
    </section>
  );
};

export default NewsPreview;
