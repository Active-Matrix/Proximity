import { Row } from '@artimisjs/ui';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StoryBookMark = () => {
  return (
    <Row align="center" className="bg-white p-2 px-5 rounded-3xl">
      <FontAwesomeIcon icon={faBookmark} className="text-black" size="lg" />
    </Row>
  );
};

export default StoryBookMark;
