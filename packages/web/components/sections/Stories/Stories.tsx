import { Column, Row } from '@artimisjs/ui';
import StoryAvatar from './storyAvatar';
import StoryOverview from './StoryOverview';
import HorizontalScroll from '@/components/ui/horizontalScroll';

const Stories = () => {
  const stories = [
    {
      name: 'CNN',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector.png',
      id: 'BOuiy078VO',
    },

    {
      name: 'Medium',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-1.png',
      id: 'U78IOOLIGHGH',
    },
    {
      name: 'Newyork Times',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-2.png',
      id: 'OIUYG087OUy',
    },
    {
      name: 'Dev',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-3.png',
      id: '09IUOGH65',
    },
    {
      name: 'CNN',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-6.png',
      id: 'OIUH078',
    },
    {
      name: 'Medium',
      src: 'https://ik.imagekit.io/geeekg65rf/Vector-5.png',
      id: 'E12OUYg',
    },
  ];
  return (
    <Column align="start" className="gap-4">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-2 px-2">
          {stories.map((story, index) => (
            <StoryAvatar
              src={story.src}
              name={story.name}
              id={story.id}
              key={story.name}
              isDefault={index === 0}
            />
          ))}
        </Row>
      </HorizontalScroll>
      <StoryOverview />
    </Column>
  );
};

export default Stories;
