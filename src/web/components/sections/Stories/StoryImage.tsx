import Image from 'next/image';
import React from 'react';

interface StoryImageProps {
  src: string;
  alt: string;
}

const StoryImage: React.FC<StoryImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    height={720}
    width={720}
    className="h-full w-full object-center object-cover"
  />
);

export default StoryImage;
