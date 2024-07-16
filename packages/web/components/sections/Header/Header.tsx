import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Row } from '@artimisjs/ui';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
  return (
    <header className="px-4 pt-2 flex flex-col gap-4">
      <Row align="center" className="justify-between w-full">
        <Text size="xxxl" className="font-semibold">
          News Now
        </Text>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Row>

      <Row
        align="center"
        className="bg-[#F2F4F7] border-[2px] rounded-3xl px-4 h-12 w-full gap-4"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="text-[#8a97b4]"
        />
        <Input type="text" placeholder="Find Interesting Topics..." />
      </Row>
    </header>
  );
};

export default Header;
