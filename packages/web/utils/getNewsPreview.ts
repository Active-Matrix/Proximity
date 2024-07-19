import { NewsPreviewType } from "@/types";
import { cache } from "react";

export const getNewsPreview = cache(async (selectedTopic: string) => {
  const newsList = [
    {
      id: "newsListHPiuh",
      title:
        "Exploring the Cosmic Frontier: A Glimpse into Humanity's Interstellar Future",
      src: 'https://ik.imagekit.io/geeekg65rf/image.png',
      tags: ['ai', 'gpt-4'],
      readTime: 7,
      href: '#',
      categoty: 'for-you',
    },
    {
      id: "newsListJHh",
      title:
        "Unveiling the Science of Human Bioluminescence: Nature's Hidden Glow",
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg?updatedAt=1721236016037',
      tags: ['human', 'biotech'],
      readTime: 3,
      href: '#',
      categoty: 'for-you',
    },
    {
      id: "newsListHIUL",
      title:
        'Advancements in Fission Reactor Technology: Powering the Future with Nuclear Energy',
      src: 'https://ik.imagekit.io/geeekg65rf/image.pngGYGOGNYO',
      tags: ['energy', 'fission'],
      readTime: 8,
      href: '#',
      categoty: 'for-you',
    },
    {
      id: "newsListIUOTY",
      title: 'The Future of Space Exploration: Challenges and Innovations',
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg_Expires=1721328965&Signature=OSRqDTLvxp8uWyWJJ7Nv1NL1-u5ZoQDkd28nRKnzK6FUZPJyPSMa~I2A3XDYoWvx-xbIKw3ZDN8lB0qFI3a0aMyY1S9CjBq3K9920ZjhaQ2JthwcbPMg6pHw9LkV4dINI4efJHfMrYLSRJax09vwV2IUaaJnpNlj4So7aIfWWwzeCr9~3jyTQhX8DJ7I91TGwdBsO~-neMkuXyGvi5g9PtRsoVHhOkG-s5F6ZP3ZLCHZHzYf2fXtpVNrkEeLcVjO9W593F5-Bbsd7Ya6cE79xqUwyZhQQZ1Uz1oSSpYXaIddRmD1Bk8nFD4WF22XLQ1-6dwcTgywmtAxSQMNtP6xXg__&Key-Pair-Id=K3RDDB1TZ8BHT8',
      tags: ['future', 'space'],
      readTime: 6,
      href: '#',
      categoty: 'for-you',
    },
    {
      id: "newsListOUYGGY",
      title: 'GPT-4: A Bigger, Better, Faster, Stronger Model for OpenAI',
      src: 'https://ik.imagekit.io/geeekg65rf/imageEDTURYFUGHJ.png',
      tags: ['ai', 'GPT-4'],
      readTime: 7,
      href: '#',
      categoty: 'for-you',
    },
  ];


  if (selectedTopic === 'for-you') {
    const filteredNewsList: NewsPreviewType[] = []
    const filteredNews = newsList.filter(news => news.categoty.toLowerCase() === 'for-you')
    filteredNewsList.push(...filteredNews)
    return filteredNewsList
  }

  return newsList.filter(news => news.tags.includes(selectedTopic.toLowerCase()))
})