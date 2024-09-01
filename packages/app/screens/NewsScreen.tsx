import { NewsFull } from '@/components/sections';
import SnapScroll from '@/components/sections/SnapScroll/SnapScroll';
import { Text } from '@/components/ui/text';
import { Column, Row } from '@artimisjs/ui';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NewsScreen = () => {
  return (
    <main>
      <Column className="gap-2 justify-between h-screen pt-[8vh]">
        <Row
          className="py-4 px-4  gap-4 border-b-[1px]text-[#343434] bg-accent fixed top-0 w-full z-20"
          align="centerHorizontal"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            className=" opacity-70 "
          />
          <Text size="xxl" className="font-black  opacity-70 ">
            Trending
          </Text>
        </Row>

        <SnapScroll>
          {Array.from({ length: 5 }).map(() => (
            <NewsFull />
          ))}
        </SnapScroll>
      </Column>
    </main>
  );
};

export default NewsScreen;
