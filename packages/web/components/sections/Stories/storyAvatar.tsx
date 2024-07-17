import { Row } from '@artimisjs/ui';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface StoryAvatarProps {
  src: StaticImageData | string;
  alt: string;
}

const StoryAvatar = ({ src, alt }: StoryAvatarProps) => {
  return (
    <Row className="h-[70px] w-[70px] border-[2px] border-[#DBDBDB] rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className="object-cover object-center"
        width={240}
        height={240}
      />
    </Row>
  );
};

export default StoryAvatar;