'use client';
import HorizontalScroll from '@/components/ui/horizontalScroll';
import { Row } from '@artimisjs/ui';
import React, { useEffect, useState } from 'react';
import TopicButton from './TopicButton';
import { getAllTopics } from '@/utils';
import { TopicsType } from '@/types';
import { TopicsSkeleton } from '@/components/skeleton';

const Topics = () => {
  const [topics, setTopics] = useState<TopicsType[] | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      const res = await getAllTopics();
      setTopics(res);
    };
    fetchTopics();
  }, []);

  if (topics === null) {
    return (
      <div className="mt-4">
        <TopicsSkeleton />
      </div>
    );
  }

  return (
    <section className="mt-4 w-screen overflow-x-hidden">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2 pr-20">
          {topics?.map((topic, index) => (
            <TopicButton
              key={index}
              label={topic.label}
              id={topic.id}
              isDefault={index === 0}
            />
          ))}
        </Row>
      </HorizontalScroll>
    </section>
  );
};

export default Topics;
