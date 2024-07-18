import { Card, Column, Row, Text } from '@artimisjs/ui';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const StoryOverview = () => {
  return (
    <Column className="gap-2 px-2">
      <Card height="fit" width="full" radius="xxl" className="h-[26vh]">
        <Card.Backdrop className="h-full w-full">
          <Image
            src="https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572"
            alt=""
            height={720}
            width={720}
            className="h-full w-full object-center object-cover"
          />
        </Card.Backdrop>

        <Card.Header className="p-4 top-0 flex justify-between items-center w-full">
          <Row align="center" className="bg-white p-2 px-5 rounded-3xl">
            <FontAwesomeIcon
              icon={faBookmark}
              className="text-black"
              size="lg"
            />
          </Row>

          <Row align="center" className="bg-white p-2 px-5 rounded-3xl gap-1">
            <Text size="lg" className="font-semibold">
              CBC
            </Text>
            <Image
              src="https://ik.imagekit.io/geeekg65rf/CBC_Logo_1992-Present.svg.png?updatedAt=1721232110109"
              alt=""
              height={32}
              width={32}
              className="w-4 h-4 object-cover object-center"
            />
          </Row>
        </Card.Header>

        <div className="bg-gradient-to-t from-[#00000060] via-[#ffffff41] to-[#fff0] h-full w-full absolute top-0 z-10" />
        <Card.Footer className="w-full bottom-0 flex justify-between items-center px-4 pb-2">
          <Text className="text-white font-semibold">#tech</Text>
          <Text className="text-white font-semibold">12 min read</Text>
        </Card.Footer>
      </Card>
      <Text size="lg" className="px-2 font-semibold line-clamp-2">
        A hypothetical point in time when artificial intelligence (AI) surpasses
        human capabilities
      </Text>
    </Column>
  );
};

export default StoryOverview;
