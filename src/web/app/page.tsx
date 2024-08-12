'use client';
import { GlobalContext } from '@/context/contextManager';
import HomeScreen from '@/screens/HomeScreen';
import NewsScreen from '@/screens/NewsScreen';
import SavedItemsScreen from '@/screens/SavedItemsScreen';
import { useContext } from 'react';

const page = () => {
  const { selectedScreen } = useContext(GlobalContext);

  const screens = [
    {
      id: 'home',
      component: <HomeScreen />,
    },
    {
      id: 'saved',
      component: <SavedItemsScreen />,
    },
    {
      id: 'news',
      component: <NewsScreen />,
    },
  ];

  const SelectedScreenComponent = screens.find(
    (screen) => screen.id === selectedScreen
  )?.component;

  return SelectedScreenComponent || <HomeScreen />;
};

export default page;
