import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Row } from '@artimisjs/ui';
import {
  faEllipsisVertical,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
  return (
    <header className="px-2 pt-1 flex flex-col gap-4 relative bg-gradient-to-t from-[#fff0] via-[#d8f4f845] to-[#F6FEFE] select-none">
      <Row align="center" className="justify-between w-full px-2">
        <Text size="xxxl" className="font-[700]">
          Proxomity
        </Text>

        <FontAwesomeIcon icon={faEllipsisVertical} size="xl" className="p-1" />

        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </Row>

      <Row
        align="center"
        className="bg-[#f2f4f765] border-[1px] border-[#DBDBDB] rounded-3xl px-4 h-12 w-full gap-4"
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
