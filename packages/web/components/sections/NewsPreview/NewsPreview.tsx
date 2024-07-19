import PreviewCard from '@/components/ui/previewCard';
import { GlobalContext } from '@/config/contextManager';
import { NewsPreviewType } from '@/types';
import { getNewsPreview } from '@/utils/getNewsPreview';
import React, { useContext, useEffect, useState } from 'react';

const NewsPreview = () => {
  const [newsList, setNewsList] = useState<NewsPreviewType[]>();
  const { selectedTopic } = useContext(GlobalContext);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await getNewsPreview(selectedTopic);
      setNewsList(res);
    };
    fetchNews();
  }, [selectedTopic]);
  return (
    <section className="flex flex-col">
      {newsList?.map((news) => (
        <PreviewCard
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
