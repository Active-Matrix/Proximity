'use client';
import { Row, Text } from '@artimisjs/ui';
import React, { Fragment, PropsWithChildren, Suspense } from 'react';
import Icon from '@/public/icon-transparent-black.png';
import Image from 'next/image';
import { useWindowSize } from '@/hooks';
import ProfileButton from './ProfileButton';

interface TitleProps extends PropsWithChildren {
  title: string;
  showLogo?: boolean;
}

const Title = ({ title, showLogo, children }: TitleProps) => {
  const screen = useWindowSize();
  return (
    <Fragment>
      <Row align="center" className="justify-between w-full px-2 lg:px-0">
        <Row align="centerHorizontal" className="lg:gap-4">
          {showLogo && (
            <Image
              src={Icon}
              alt="icon"
              height={320}
              width={320}
              className="object-contain object-center h-14 w-14 hidden lg:flex"
            />
          )}
          <Text
            size={screen === 'mobile' ? '3x' : '4x'}
            className="font-[700] lg:font[500]"
          >
            {title}
          </Text>
        </Row>

        <Row align="end" className="gap-6 w-full items-center">
          {screen !== 'mobile' && children}
          <Suspense>
            <ProfileButton />
          </Suspense>
        </Row>
      </Row>
      {screen === 'mobile' && children}
    </Fragment>
  );
};

export default Title;
