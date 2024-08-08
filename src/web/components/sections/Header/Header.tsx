import { Input } from '@/components/ui/input';
import { Row, Text } from '@artimisjs/ui';
import {
  faEllipsisVertical,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';
import Title from './Title';

interface HeaderProps extends PropsWithChildren {
  title: string;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="px-2 lg:px-0 pt-1 flex flex-col gap-4 lg:gap-0 relative bg-gradient-to-t from-[#fff0] via-[#d8f4f845] to-[#F6FEFE] lg:bg-gradient-to-t select-none">
      <Title title={title} showLogo>
        {children}
      </Title>
    </header>
  );
};

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <Row
      align="center"
      className="bg-[#f2f4f765] border-[1px] border-[#DBDBDB] rounded-3xl lg:rounded-full px-4 h-12 lg:h-[3.2rem] w-full gap-4 lg:w-[42%]"
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
