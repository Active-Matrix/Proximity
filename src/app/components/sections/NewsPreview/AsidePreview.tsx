import { AsidePreviewSkeleton } from '@/components/skeleton/AsidePreviewSkeleton';
import PreviewCard from '@/components/ui/previewCard';
import { NewsPreviewType } from '@/types';
import { getNewsPreview } from '@/utils';
import { Column, Row, Text } from '@artimisjs/ui';
import React, { useEffect, useState } from 'react';

const AsidePreview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsPreview, setNewsPreview] = useState<NewsPreviewType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);

      const delay = new Promise((resolve) => setTimeout(resolve, 350));
      const newsPromise = getNewsPreview('for-you');
      const [res] = await Promise.all([newsPromise, delay]);

      setNewsPreview(res);
      setIsLoading(false);
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <Column className="hidden lg:block h-[50vh] w-full flex-1 border-l-[1px] min-w-[20vw] px-4">
        <Column className="w-full justify-between h-full mt-[3.3rem]">
          {[...Array(3)].map((_, index) => (
            <AsidePreviewSkeleton key={index} />
          ))}
        </Column>
      </Column>
    );
  }

  return (
    <aside className="hidden lg:block h-full w-full flex-1 border-l-[1px] min-w-[20vw] px-4">
      <Text size="2x" className="font-[600] px-3 pb-2">
        Latest For You
      </Text>
      {newsPreview?.slice(0, 3).map((news, index) => (
        <PreviewCard
          key={`${index}-${news.href}`}
          href={news.href}
          border={index !== 2}
        >
          <Column className="w-full justify-between">
            <PreviewCard.Title title={news.title} />

            <Row className="w-full justify-between opacity-70">
              <PreviewCard.Tags tags={news.tags} />
              <PreviewCard.ReadTime readTime={news.readTime} />
            </Row>
          </Column>
        </PreviewCard>
      ))}
    </aside>
  );
};

export default AsidePreview;
