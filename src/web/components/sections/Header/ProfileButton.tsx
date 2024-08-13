'use client';
import { useUrlStateBridge, useWindowSize } from '@/hooks';
import {
  faEllipsisVertical,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import React, { useContext } from 'react';
import { Row, Text } from '@artimisjs/ui';
import { GlobalContext } from '@/context/contextManager';
import { cn } from '@/lib/utils';

const ProfileButton = () => {
  const screen = useWindowSize();
  const { setSelectedScreen, selectedScreen } = useContext(GlobalContext);
  const { setParams } = useUrlStateBridge();

  const handleClick = (screen: string) => {
    setParams('window', screen);
    setSelectedScreen(screen);
  };

  const popoverItems = [
    {
      label: 'Account Settings',
      icon: faGear,
      targetScreen: 'account',
    },
    {
      label: 'Logout Settings',
      icon: faRightFromBracket,
      targetScreen: 'logout',
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        {screen === 'mobile' ? (
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="xl"
            className="p-1"
          />
        ) : (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </PopoverTrigger>

      <PopoverContent className="w-fit bg-[#f7ffff] border-[1px] border-[#dbdbdb] mx-2 rounded-2xl px-1">
        {popoverItems.map((item) => (
          <Row
            key={item.label}
            align="centerHorizontal"
            className="gap-2 cursor-pointer py-2 hover:bg-accent px-4 rounded-2xl"
            onClick={() => handleClick(item.targetScreen)}
          >
            <FontAwesomeIcon icon={item.icon} />
            <Text size="md">{item.label}</Text>
          </Row>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
