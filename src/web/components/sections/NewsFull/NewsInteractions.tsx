import { Row, Text } from '@artimisjs/ui';
import {
  faHeart,
  faBookmark,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';

interface NewsInteractionsProps {
  newsSource: string;
  newsSourceLogoUrl: string;
}

const NewsInteractions = ({
  newsSource,
  newsSourceLogoUrl,
}: NewsInteractionsProps) => {
  return (
    <Row className="px-2 justify-between border-t-[1px] pt-4">
      <Row align="center" className="rounded-3xl gap-2">
        <Text size="lg" className="font-semibold">
          {newsSource}
        </Text>
        <Image
          src={newsSourceLogoUrl}
          alt={`${newsSource} logo`}
          height={32}
          width={32}
          className="w-5 h-5 object-scale-down object-center"
        />
      </Row>
      <Row align="center" className="gap-6 text-[#667085]">
        <FontAwesomeIcon icon={faHeart} size="lg" />
        <FontAwesomeIcon icon={faBookmark} size="lg" />
        <FontAwesomeIcon icon={faShare} size="lg" />
      </Row>
    </Row>
  );
};

export default NewsInteractions;
