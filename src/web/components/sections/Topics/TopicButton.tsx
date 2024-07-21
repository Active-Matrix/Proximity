import { GlobalContext } from '@/context/contextManager';
import { cn } from '@/lib/utils';
import { Row } from '@artimisjs/ui';
import React, { useContext, useEffect, useMemo } from 'react';
import { Text } from '@/components/ui/text';

interface TopicButtonProps {
  id: string;
  label: string;
}

const TopicButton: React.FC<TopicButtonProps> = ({ id, label }) => {
  const { selectedTopic, setSelectedTopic } = useContext(GlobalContext);

  const containerClasses = useMemo(
    () =>
      cn(
        'h-10 px-5 rounded-[30px] gap-1 border-[1px] opacity-[86%]',
        'transition-all duration-300 select-none',
        selectedTopic === id
          ? 'bg-black border-black'
          : 'bg-accent border-[#DFDFDF]'
      ),
    [selectedTopic]
  );

  const textClasses = useMemo(
    () =>
      cn('font-semibold', selectedTopic === id ? 'text-white' : 'text-black'),
    [selectedTopic]
  );

  return (
    <Row
      align="center"
      className={containerClasses}
      onClick={() => setSelectedTopic(id)}
    >
      <Text size="sm" className={textClasses}>
        {label}
      </Text>
    </Row>
  );
};

export default TopicButton;
