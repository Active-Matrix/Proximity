import PreviewCard from '@/components/ui/previewCard';
import React from 'react';

const NewsPreview = () => {
  const newsList = [
    {
      title: 'GPT-4: A Bigger, Better, Faster, Stronger Model for OpenAI',
      src: 'https://ik.imagekit.io/geeekg65rf/image.png?updatedAt=1721236090357',
      tags: ['AI', 'GPT-4'],
      readTime: 10,
      href: '#',
    },
    {
      title:
        'Exploring the Phenomenon of Bioluminescence in Humans: Illuminating the Mysteries of Natural Light',
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg?updatedAt=1721236016037',
      tags: ['Future', 'Biotech'],
      readTime: 10,
      href: '#',
    },
  ];
  return (
    <section className="flex flex-col gap-2">
      {newsList.map((news) => (
        <PreviewCard
          href={news.href}
          tags={news.tags}
          readTime={news.readTime}
          src={news.src}
          title={news.title}
        />
      ))}
    </section>
  );
};

export default NewsPreview;
