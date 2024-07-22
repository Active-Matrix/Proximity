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
      <Column className="px-4 gap-2 justify-between min-h-[86vh] max-h-[88vh] pt-[8vh]">
        <Row
          className="py-4 gap-4 border-b-[1px]text-[#343434] bg-accent fixed top-0 w-full z-20"
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

        {Array.from({ length: 5 }).map(() => (
          <SnapScroll>
            <NewsFull />
          </SnapScroll>
        ))}
      </Column>
    </main>
  );
};

export default NewsScreen;
