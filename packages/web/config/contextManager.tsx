'use client';
import { createContext, PropsWithChildren, useState } from 'react';
import React from 'react';

interface GlobalContextType {
  selectedSourceID: string;
  setSelectedSourceID: React.Dispatch<React.SetStateAction<string>>;
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const ContextManager = ({ children }: PropsWithChildren) => {
  const [selectedSourceID, setSelectedSourceID] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [theme, setTheme] = useState<string>('');

  const value: GlobalContextType = {
    selectedSourceID,
    setSelectedSourceID,
    selectedTopic,
    setSelectedTopic,
    theme,
    setTheme,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
