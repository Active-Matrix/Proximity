import React from 'react';
import { Card } from '@artimisjs/ui';
import NewsInteractions from './NewsInteractions';
import NewsContent from './NewsContent';
import NewsTitle from './NewsTitle';
import NewsCoverImage from './NewsCoverImage';

const NewsFull = () => {
  const newsTitle =
    'Harris will seek Democratic nomination and could be the first Black woman and Asian American to lead a major party ticket';
  const newsContent =
    'Vice President Kamala Harris said she plans to seek the Democratic nomination after President Joe Biden stepped aside and endorsed her, setting up a push that could make her the first Black woman and first Asian American to lead the ticket of a major political party.';
  const storyImageUrl =
    'https://variety.com/wp-content/uploads/2024/07/GettyImages-2161323413.jpg?w=1000&h=667&crop=1&resize=1360%2C907';
  const newsAltText = 'cover image of news';
  const newsReadTime = 11;
  const newsTags = ['latest'];
  const newsSource = 'CBC';
  const newsSourceLogoUrl = 'https://ik.imagekit.io/geeekg65rf/Vector-6.png';

  return (
    <section className="h-[92vh]">
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
    </section>
  );
};

export default NewsFull;
