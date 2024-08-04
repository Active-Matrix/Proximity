import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Row } from '@artimisjs/ui';
import {
  faEllipsisVertical,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';

interface HeaderProps extends PropsWithChildren {
  title: string;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="px-2 pt-1 flex flex-col gap-4 relative bg-gradient-to-t from-[#fff0] via-[#d8f4f845] to-[#F6FEFE] select-none">
      <Row align="center" className="justify-between w-full px-2">
        <Text size="xxxl" className="font-[700]">
          {title}
        </Text>

        <FontAwesomeIcon icon={faEllipsisVertical} size="xl" className="p-1" />

        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </Row>
      {children}
    </header>
  );
};

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <Row
      align="center"
      className="bg-[#f2f4f765] border-[1px] border-[#DBDBDB] rounded-3xl px-4 h-12 w-full gap-4"
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="lg"
        className="text-[#8a97b4]"
      />
      <Input type="text" placeholder={placeholder} id="search" />
    </Row>
  );
};

Header.SearchBar = SearchBar;

export default Header;
