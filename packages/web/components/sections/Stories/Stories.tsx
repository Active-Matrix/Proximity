import { Column, Row } from '@artimisjs/ui';
import StoryAvatar from '@/components/ui/storyAvatar';
import StoryOverview from './StoryOverview';
import HorizontalScroll from '@/components/ui/horizontalScroll';

const Stories = () => {
  const stories = [
    {
      name: 'CNN',
      src: 'https://ik.imagekit.io/geeekg65rf/Frame%206.png?updatedAt=1721230408516',
    },

    {
      name: 'Medium',
      src: 'https://ik.imagekit.io/geeekg65rf/Frame%207.png?updatedAt=1721230408450',
    },
    {
      name: 'Newyork Times',
      src: 'https://ik.imagekit.io/geeekg65rf/Frame%208.png?updatedAt=1721230408446',
    },
    {
      name: 'Dev',
      src: 'https://ik.imagekit.io/geeekg65rf/Frame%209.png?updatedAt=1721230408512',
    },
    {
      name: 'CNN',
      src: 'https://ik.imagekit.io/geeekg65rf/Frame%2010.png?updatedAt=1721230408536',
    },
  ];
  return (
    <Column align="start" className="gap-4">
      <HorizontalScroll>
        <Row className="flex justify-center items-center gap-4 px-2">
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
