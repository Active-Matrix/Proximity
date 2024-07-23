import React from 'react';
import { Text } from '@/components/ui/text';

const NewsContent = ({ newsContent }: { newsContent: string }) => {
  return (
    <Text size="xl" className="text-ellipsis line-clamp-[7]">
      {newsContent}
    </Text>
  );
};

export default NewsContent;
