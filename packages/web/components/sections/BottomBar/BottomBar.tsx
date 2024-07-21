'use client';
import { GlobalContext } from '@/config/contextManager';
import { Card } from '@artimisjs/ui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';

const BottomBar = () => {
  const { setSelectedScreen, selectedScreen } = useContext(GlobalContext);
  const buttons = [
    {
      label: 'Home',
      href: '/',
      icon: faHome,
    },
    {
      label: 'News',
      href: '/news',
      icon: faNewspaper,
    },
    // {
    //   label: 'Search',
    //   href: '/',
    //   icon: faMagnifyingGlass,
    // },
    {
      label: 'Saved',
      href: '/saved',
      icon: faBookmark,
    },
  ];
  return (
    <section className="fixed bottom-0 w-full h-[74px] bg-gradient-to-t from-[#ffffffd5] via-[#ffffff97] to-[#fff0] px-4 pb-3">
      <Card
        width="full"
        height="full"
        radius="full"
        className="bg-[#f2f4f7dc] shadow-[0_3px_4px_rgb(216,244,248,0.3)] flex-center p-1 backdrop-blur-md"
      >
        {buttons.map((button, index) => (
          <button
            className={`w-full h-full rounded-full border
              ${selectedScreen === button.href ? 'bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_0px_10px] border-[#DFDFDF]' : 'bg-transparent border-[#0000]'}`}
            key={`${index}-${button.href}`}
            onClick={() => setSelectedScreen(button.href)}
          >
            <FontAwesomeIcon icon={button.icon as IconProp} size="lg" />
          </button>
        ))}
      </Card>
    </section>
  );
};

export default BottomBar;
