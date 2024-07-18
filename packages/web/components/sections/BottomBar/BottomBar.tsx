'use client';
import { Button, Card } from '@artimisjs/ui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const BottomBar = () => {
  const [selected, setSelected] = useState('Home');
  const buttons = [
    {
      label: 'Home',
      href: '/',
      icon: faHome,
    },
    {
      label: 'News',
      href: '/',
      icon: faNewspaper,
    },
    {
      label: 'Search',
      href: '/',
      icon: faMagnifyingGlass,
    },
    {
      label: 'Saved',
      href: '/',
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
        {buttons.map((button) => (
          <button
            className={`w-full h-full rounded-full border
              ${selected === button.label ? 'bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_0px_10px] border-[#DFDFDF]' : 'bg-transparent border-[#0000]'}`}
            key={button.href}
            onClick={() => setSelected(button.label)}
          >
            <FontAwesomeIcon icon={button.icon as IconProp} size="lg" />
          </button>
        ))}
      </Card>
    </section>
  );
};

export default BottomBar;
