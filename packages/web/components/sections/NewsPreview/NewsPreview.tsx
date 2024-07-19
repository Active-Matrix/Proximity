import PreviewCard from '@/components/ui/previewCard';
import { GlobalContext } from '@/config/contextManager';
import { NewsPreviewType } from '@/types';
import { getNewsPreview } from '@/utils/getNewsPreview';
import React, { useContext, useEffect, useState } from 'react';
import { Column } from '@artimisjs/ui';
import { NewsPreviewSkeleton } from '@/components/skeleton';

const NewsPreview = () => {
  const [newsList, setNewsList] = useState<NewsPreviewType[] | null>(null);
  const { selectedTopic } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const res = await getNewsPreview(selectedTopic);
      setNewsList(res);
      setIsLoading(false);
    };
    fetchNews();
  }, [selectedTopic]);

  if (isLoading) {
    return (
      <Column className="gap-4 w-full">
        {[...Array(3)].map((_, index) => (
          <NewsPreviewSkeleton key={index} />
        ))}
      </Column>
    );
  }

  return (
    <section className="flex flex-col">
      {newsList?.map((news, index) => (
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
