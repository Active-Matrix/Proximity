import PreviewCard from '@/components/ui/previewCard';
import React from 'react';

const NewsPreview = () => {
  const newsList = [
    {
      title:
        "Exploring the Cosmic Frontier: A Glimpse into Humanity's Interstellar Future",
      src: 'https://ik.imagekit.io/geeekg65rf/image.png',
      tags: ['AI', 'GPT-4'],
      readTime: 7,
      href: '#',
    },
    {
      title:
        "Unveiling the Science of Human Bioluminescence: Nature's Hidden Glow",
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg?updatedAt=1721236016037',
      tags: ['Future', 'Biotech'],
      readTime: 3,
      href: '#',
    },
    {
      title:
        'Advancements in Fission Reactor Technology: Powering the Future with Nuclear Energy',
      src: 'https://ik.imagekit.io/geeekg65rf/image.png',
      tags: ['Future', 'Fission'],
      readTime: 8,
      href: '#',
    },
    {
      title: 'The Future of Space Exploration: Challenges and Innovations',
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg_Expires=1721328965&Signature=OSRqDTLvxp8uWyWJJ7Nv1NL1-u5ZoQDkd28nRKnzK6FUZPJyPSMa~I2A3XDYoWvx-xbIKw3ZDN8lB0qFI3a0aMyY1S9CjBq3K9920ZjhaQ2JthwcbPMg6pHw9LkV4dINI4efJHfMrYLSRJax09vwV2IUaaJnpNlj4So7aIfWWwzeCr9~3jyTQhX8DJ7I91TGwdBsO~-neMkuXyGvi5g9PtRsoVHhOkG-s5F6ZP3ZLCHZHzYf2fXtpVNrkEeLcVjO9W593F5-Bbsd7Ya6cE79xqUwyZhQQZ1Uz1oSSpYXaIddRmD1Bk8nFD4WF22XLQ1-6dwcTgywmtAxSQMNtP6xXg__&Key-Pair-Id=K3RDDB1TZ8BHT8',
      tags: ['Future', 'Space'],
      readTime: 6,
      href: '#',
    },
    {
      title: 'GPT-4: A Bigger, Better, Faster, Stronger Model for OpenAI',
      src: 'https://ik.imagekit.io/geeekg65rf/image(1).png',
      tags: ['AI', 'GPT-4'],
      readTime: 7,
      href: '#',
    },
  ];
  return (
    <section className="flex flex-col">
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
