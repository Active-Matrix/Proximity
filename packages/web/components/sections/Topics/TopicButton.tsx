import { GlobalContext } from '@/config/contextManager';
import { cn } from '@/lib/utils';
import { Row, Text } from '@artimisjs/ui';
import React, { useContext, useEffect, useMemo } from 'react';

interface TopicButtonProps {
  id: string;
  label: string;
  isDefault: boolean;
}

const TopicButton: React.FC<TopicButtonProps> = ({ id, label, isDefault }) => {
  const { selectedTopic, setSelectedTopic } = useContext(GlobalContext);

  useEffect(() => {
    if (isDefault) setSelectedTopic(id);
  }, []);

  const containerClasses = useMemo(
    () =>
      cn(
        'h-10 px-5 rounded-[30px] gap-1 border-[1px]',
        'transition-all duration-300  select-none',
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
