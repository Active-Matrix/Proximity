import { Flex } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';

interface StoryImageProps {
  src: string;
  alt: string;
}

const StoryImage: React.FC<StoryImageProps> = ({ src, alt }) => (
  <Flex align="center" className="h-full w-full overflow-hidden">
    <Image
      src={src}
      alt={alt}
      height={720}
      width={720}
      className="h-full w-full object-cover object-center lg:hover:scale-105 transition-all duration-300"
    />
  </Flex>
);

export default StoryImage;
