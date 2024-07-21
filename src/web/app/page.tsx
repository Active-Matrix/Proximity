'use client';
import { GlobalContext } from '@/context/contextManager';
import HomeScreen from '@/screens/HomeScreen';
import SavedItemsScreen from '@/screens/SavedItemsScreen';
import { Fragment, useContext } from 'react';

const page = () => {
  const { selectedScreen } = useContext(GlobalContext);

  const screens = [
    {
      href: '/',
      component: <HomeScreen />,
    },
    {
      href: '/saved',
      component: <SavedItemsScreen />,
    },
    {
      href: '/news',
      component: <div>News</div>,
    },
  ];

  const SelectedScreenComponent = screens.find(
    (screen) => screen.href === selectedScreen
  )?.component;

  return SelectedScreenComponent;
};

export default page;