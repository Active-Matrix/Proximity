'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useContext, useMemo } from 'react';
import { GlobalContext } from '@/context/contextManager';
import { cn } from '@/lib/utils';
import { Row } from '@artimisjs/ui';

interface StoryAvatarProps {
  avatar: StaticImageData | string;
  name: string;
  id: string;
}

const StoryAvatar: React.FC<StoryAvatarProps> = ({ avatar, name, id }) => {
  const { selectedSourceID, setSelectedSourceID } = useContext(GlobalContext);
  const isSelected = selectedSourceID === id;

  const rowClasses = useMemo(
    () =>
      cn(
        'h-[62px] w-[62px] border-[1px] border-[#DBDBDB]',
        'rounded-full overflow-hidden transition-all duration-300',
        isSelected ? 'bg-black' : 'bg-accent'
      ),
    [isSelected]
  );

  const imageClasses = useMemo(
    () =>
      cn(
        'object-contain object-center h-full w-full p-4 saturate-0',
        'contrast-200 brightness-0 transition-all duration-300',
        isSelected && 'invert'
      ),
    [isSelected]
  );

  return (
    <Row className={rowClasses} onClick={() => setSelectedSourceID(id)}>
      <Image
        src={avatar}
        alt={name}
        className={imageClasses}
        width={62}
        height={62}
      />
    </Row>
  );
};

export default StoryAvatar;
