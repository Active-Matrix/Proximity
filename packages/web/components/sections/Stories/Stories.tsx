import { Column, Row } from '@artimisjs/ui';
import StoryAvatar from './storyAvatar';
import StoryOverview from './StoryOverview';
import HorizontalScroll from '@/components/ui/horizontalScroll';

const Stories = () => {
  const stories = [
    {
      name: 'CNN',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector.png',
    },

    {
      name: 'Medium',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-1.png',
    },
    {
      name: 'Newyork Times',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-2.png',
    },
    {
      name: 'Dev',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-3.png',
    },
    {
      name: 'CNN',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-6.png',
    },
    {
      name: 'Medium',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-5.png',
    },
  ];
  return (
    <Column align="start" className="gap-4">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2">
          {stories.map((story) => (
            <StoryAvatar src={story.src} alt={story.name} key={story.name} />
          ))}
        </Row>
      </HorizontalScroll>
      <StoryOverview />
    </Column>
  );
};

export default Stories;
