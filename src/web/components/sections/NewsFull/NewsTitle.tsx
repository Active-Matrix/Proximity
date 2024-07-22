import React from 'react';
import { Text } from '@/components/ui/text';

const NewsTitle = ({ newsTitle }: { newsTitle: string }) => {
  return (
    <Text size="xxxl" className="font-black">
      {newsTitle}
    </Text>
  );
};

export default NewsTitle;
