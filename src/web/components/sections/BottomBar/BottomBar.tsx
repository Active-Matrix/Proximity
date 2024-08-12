'use client';
import { GlobalContext } from '@/context/contextManager';
import { useRouter } from 'next/navigation';
import { Card } from '@artimisjs/ui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useUrlStateBridge } from '@/hooks';

const BottomBar = () => {
  const { setSelectedScreen, selectedScreen } = useContext(GlobalContext);
  const { setParams } = useUrlStateBridge();

  const buttons = [
    {
      label: 'Home',
      href: 'home',
      icon: faHome,
    },
    {
      label: 'News',
      href: 'news',
      icon: faNewspaper,
    },
    // {
    //   label: 'Search',
    //   href: '/',
    //   icon: faMagnifyingGlass,
    // },
    {
      label: 'Saved',
      href: 'saved',
      icon: faBookmark,
    },
  ];

  const handleClick = (href: string) => {
    setParams('window', href);
    setSelectedScreen(href);
  };

  return (
    <section className="fixed bottom-0 lg:bottom-4 w-full lg:w-[40%] lg:left-[50%] lg:-translate-x-1/2 h-[70px] bg-gradient-to-t from-[#ffffffd5] via-[#ffffff97] to-[#fff0] px-3 pb-2 z-[99]">
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
            onClick={() => handleClick(button.href)}
          >
            <FontAwesomeIcon icon={button.icon as IconProp} size="lg" />
          </button>
        ))}
      </Card>
    </section>
  );
};

export default BottomBar;
