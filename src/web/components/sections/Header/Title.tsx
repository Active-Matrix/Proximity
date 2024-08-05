'use client';
import { Row, Text } from '@artimisjs/ui';
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, PropsWithChildren } from 'react';
import Icon from '@/public/icon-transparent-black.png';
import Image from 'next/image';
import { useWindowSize } from '@/hooks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TitleProps extends PropsWithChildren {
  title: string;
  showLogo: boolean;
}

const Title = ({ title, showLogo, children }: TitleProps) => {
  const screen = useWindowSize();
  return (
    <Fragment>
      <Row
        align="center"
        className="justify-between w-full px-2 lg:px-0"
      >
        <Row align="centerHorizontal" className="lg:gap-4">
          {showLogo && (
            <Image
              src={Icon}
              alt="icon"
              height={320}
              width={320}
              className="object-contain object-center h-16 w-16 hidden lg:flex"
            />
          )}
          <Text
            size={screen === 'mobile' ? '3x' : '5x'}
            className="font-[700] lg:font[500]"
          >
            {title}
          </Text>
        </Row>

        {/* <FontAwesomeIcon icon={faEllipsisVertical} size="xl" className="p-1" /> */}
        <Row align="end" className="gap-4 w-full items-center">
          {screen !== 'mobile' && children}

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Row>
      </Row>
      {screen === 'mobile' && children}
    </Fragment>
  );
};

export default Title;
