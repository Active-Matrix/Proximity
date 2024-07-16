import { Column, Row } from '@artimisjs/ui';
import nyt from './nyt.png';
import StoryAvatar from '@/components/ui/storyAvatar';

const Stories = () => {
  return (
    <Column align="center" className="gap-4 w-screen overflow-x-scroll px-6">
      <Row className="flex justify-center items-center gap-4 whitespace-nowrap">
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
        <StoryAvatar src={nyt} alt="New York Times" />
      </Row>
    </Column>
  );
};

export default Stories;
