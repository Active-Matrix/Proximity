'use client';
import { Button, Card } from '@artimisjs/ui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
      label: 'Saved',
      href: '/',
      icon: faBookmark,
    },
  ];
  return (
    <section className="fixed bottom-0 w-full h-20 bg-gradient-to-t from-[#ffffffd5] via-[#ffffff97] to-[#fff0] px-6 pb-4">
      <Card
        width="full"
        height="full"
        radius="full"
        className="bg-[#F2F4F7] shadow-[0_3px_8px_rgb(0,0,0,0.3)] flex-center p-1"
      >
        {buttons.map((button) => (
          <Button
            className={`w-full h-full rounded-full hover:bg-white hover:text-black
              ${selected === button.label ? 'bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]' : 'bg-transparent border-[#0000]'}`}
            key={button.href}
            onClick={() => setSelected(button.label)}
          >
            <FontAwesomeIcon icon={button.icon as IconProp} />
          </Button>
        ))}
      </Card>
    </section>
  );
};

export default BottomBar;
