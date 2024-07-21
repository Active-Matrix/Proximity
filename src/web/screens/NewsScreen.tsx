import StoryFooter from '@/components/sections/Stories/StoryFooter';
import StoryHeader from '@/components/sections/Stories/StoryHeader';
import StoryImage from '@/components/sections/Stories/StoryImage';
import { Text } from '@/components/ui/text';
import { Card, Column, Row } from '@artimisjs/ui';
import {
  faArrowLeft,
  faBookmark,
  faHeart,
  faShare,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const NewsScreen = () => {
  return (
    <main>
      <Column className="px-4 gap-2 justify-between min-h-[86vh] max-h-[88vh]">
        <Row
          className="py-4 gap-4 border-b-[1px] opacity-70 text-[#343434]"
          align="centerHorizontal"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          <Text size="xxl" className="font-black">
            Trending
          </Text>
        </Row>

        <Card
          width="full"
          height="full"
          className="bg-accent flex flex-col gap-6 px-1"
        >
          <Text size="xxxl" className="font-black">
            Advancements in Fission Reactor Technology: Powering the Future with
            Nuclear Energy
          </Text>

          <Card height="fit" width="full" radius="xxl" className="min-h-44">
            <Card.Backdrop className="h-full w-full">
              <StoryImage
                src="https://ik.imagekit.io/geeekg65rf/image.pngGYGOGNYO"
                alt={`cover image of story`}
              />
            </Card.Backdrop>
            <StoryFooter storyReadTime={11} storyTags={['future']} />
            <div
              className="bg-gradient-to-t from-[#0000008d] via-[#ffffff00] to-[#fff0] 
        h-full w-full absolute top-0 z-[7]"
            />
          </Card>

          <Text size="xl" className="text-ellipsis line-clamp-[10]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium
          </Text>
        </Card>

        <Row className="px-2 justify-between border-t-[1px] pt-4">
          <Row align="center" className="gap-6 text-[#667085]">
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <FontAwesomeIcon icon={faBookmark} size="lg" />
            <FontAwesomeIcon icon={faShare} size="lg" />
          </Row>
          <Row align="center" className="rounded-3xl gap-2">
            <Text size="lg" className="font-semibold">
              CBC
            </Text>
            <Image
              src="https://ik.imagekit.io/geeekg65rf/Vector-6.png"
              alt={`CBC logo`}
              height={32}
              width={32}
              className="w-5 h-5 object-scale-down object-center"
            />
          </Row>
        </Row>
      </Column>
    </main>
  );
};

export default NewsScreen;
