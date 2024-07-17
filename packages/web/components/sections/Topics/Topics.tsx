'use client';
import HorizontalScroll from '@/components/ui/horizontalScroll';
import { Row, Text } from '@artimisjs/ui';
import React, { useState } from 'react';

const Topics = () => {
  const topics = ['For You', 'Sports', 'Cosmos', 'Tech', 'Movies', 'Space'];
  const [selected, setSelected] = useState<string>(topics[0]);

  return (
    <section className="mt-4 w-screen overflow-x-hidden">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2">
          {topics.map((topic) => (
            <Row
              key={topic}
              align="center"
              className={`
                ${selected === topic ? 'bg-black' : 'bg-[#F2F4F7] border-[2px]'} border-[#DFDFDF]'}
                p-2 px-5 rounded-[30px] gap-1`}
              onClick={() => setSelected(topic)}
            >
              <Text
                size="md"
                className={`
                ${selected === topic ? 'text-white' : 'text-black'}
                font-semibold`}
              >
                {topic}
              </Text>
            </Row>
          ))}
        </Row>
      </HorizontalScroll>
    </section>
  );
};

export default Topics;
