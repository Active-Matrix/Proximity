import { Main } from '@/components/layout';
import { Header, NewsPreview } from '@/components/sections';
import React from 'react';

const SavedItemsScreen = () => {
  return (
    <Main>
      <Header title="Saved">
        <Header.SearchBar placeholder="Find Saved News..." />
      </Header>
      <NewsPreview />
    </Main>
  );
};

export default SavedItemsScreen;
