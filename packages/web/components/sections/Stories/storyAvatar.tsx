import { Row } from '@artimisjs/ui';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface StoryAvatarProps {
  src: StaticImageData | string;
  alt: string;
  isSelected?: boolean;
}

const StoryAvatar = ({ src, alt, isSelected }: StoryAvatarProps) => {
  return (
    <Row
      className={`
      h-[62px] w-[62px] border-[1px] border-[#DBDBDB] rounded-full overflow-hidden
      transition-all duration-300
      ${isSelected ? 'bg-black' : 'bg-accent'}
    `}
    >
      <Image
        src={src}
        alt={alt}
        className={`
          object-contain object-center h-full w-full p-4 saturate-0 contrast-200 brightness-0 
          transition-all duration-300
          ${isSelected && 'invert'}`}
        width={62}
        height={62}
      />
    </Row>
  );
};

export default StoryAvatar;
