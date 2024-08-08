'use client';
import HorizontalScroll from '@/components/ui/horizontalScroll';
import { Row } from '@artimisjs/ui';
import React, { useContext, useEffect, useState } from 'react';
import TopicButton from './TopicButton';
import { getAllTopics } from '@/utils';
import { TopicsType } from '@/types';
import { TopicsSkeleton } from '@/components/skeleton';
import { GlobalContext } from '@/context/contextManager';

const Topics = () => {
  const [topics, setTopics] = useState<TopicsType[] | undefined>(undefined);
  const { selectedScreen, selectedTopic, setSelectedTopic } =
    useContext(GlobalContext);

  useEffect(() => {
    const fetchTopics = async () => {
      const res = await getAllTopics();
      setTopics(res);
      selectedTopic === '' && setSelectedTopic(res[0].id);
    };
    fetchTopics();
  }, []);

  useEffect(() => {
    const sessionData = sessionStorage.getItem('topics');
    if (sessionData) {
      setTopics(JSON.parse(sessionData));
    }
  }, [selectedScreen]);

  return topics ? (
    <section className="mt-4 w-screen lg:w-full lg:mt-0 overflow-x-hidden">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2 pr-20">
          {topics?.map((topic, index) => (
            <TopicButton key={index} label={topic.label} id={topic.id} />
          ))}
        </Row>
      </HorizontalScroll>
    </section>
  ) : (
    <div className="mt-4">
      <TopicsSkeleton />
    </div>
  );
};

export default Topics;
