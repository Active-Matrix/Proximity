import React, { useRef } from 'react';
import { Card } from '@artimisjs/ui';
import NewsInteractions from './NewsInteractions';
import NewsContent from './NewsContent';
import NewsTitle from './NewsTitle';
import NewsCoverImage from './NewsCoverImage';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import '@/styles/scrollSnap.scss';

const NewsFull = ({ className }: { className?: string }) => {
  //#region
  const newsTitle =
    'Supreme Court declines to halt former Colorado official’s trial on charges related to election security breach';
  const newsContent =
    'The Supreme Court on Monday turned down a request from a former Colorado county clerk to halt her upcoming trial on charges stemming from her alleged involvement in an apparent security breach at the county’s election offices in 2021';
  const storyImageUrl =
    'https://media.cnn.com/api/v1/images/stellar/prod/ap23100653194921.jpg';
  const newsAltText = 'cover image of news';
  const newsReadTime = 11;
  const newsTags = ['latest'];
  const newsSource = 'CBC';
  const newsSourceLogoUrl = 'https://ik.imagekit.io/geeekg65rf/Vector-6.png';
  //#endregion

  const targetRef = useRef(null);

  return (
    <motion.section
      ref={targetRef}
      className={cn('p-2 scroll-snap-start', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card
        width="full"
        height="full"
        className="bg-accent flex flex-col gap-6 px-1 overflow-y-scroll h-[75vh]"
      >
        <NewsTitle newsTitle={newsTitle} />
        <NewsCoverImage
          newsAltText={newsAltText}
          newsImageUrl={storyImageUrl}
          newsReadTime={newsReadTime}
          newsTags={newsTags}
        />
        <NewsContent newsContent={newsContent} />
      </Card>

      <NewsInteractions
        newsSource={newsSource}
        newsSourceLogoUrl={newsSourceLogoUrl}
      />
    </motion.section>
  );
};

export default NewsFull;
