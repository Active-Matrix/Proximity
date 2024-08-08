const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

// Your routes go here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/news', (req, res) => {
  console.log('request received to /news')
  const newsList = [
    {
      id: "newsListHPiuh",
      title:
        "Exploring the Cosmic Frontier: A Glimpse into Humanity's Interstellar Future",
      src: 'https://ik.imagekit.io/geeekg65rf/image9068tn0uh.png',
      tags: ['ai', 'gpt-4'],
      readTime: 7,
      href: '#',
      category: 'for-you',
    },
    {
      id: "newsListJHh",
      title:
        "Unveiling the Science of Human Bioluminescence: Nature's Hidden Glow",
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg?updatedAt=1721236016037',
      tags: ['human', 'biotech'],
      readTime: 3,
      href: '#',
      category: 'for-you',
    },
    {
      id: "newsListHIUL",
      title:
        'Advancements in Fission Reactor Technology: Powering the Future with Nuclear Energy',
      src: 'https://ik.imagekit.io/geeekg65rf/image.pngGYGOGNYO',
      tags: ['energy', 'fission'],
      readTime: 8,
      href: '#',
      category: 'for-you',
    },
    {
      id: "newsListIUOTY",
      title: 'The Future of Space Exploration: Challenges and Innovations',
      src: 'https://ik.imagekit.io/geeekg65rf/image1_0.jpg_Expires=1721328965&Signature=OSRqDTLvxp8uWyWJJ7Nv1NL1-u5ZoQDkd28nRKnzK6FUZPJyPSMa~I2A3XDYoWvx-xbIKw3ZDN8lB0qFI3a0aMyY1S9CjBq3K9920ZjhaQ2JthwcbPMg6pHw9LkV4dINI4efJHfMrYLSRJax09vwV2IUaaJnpNlj4So7aIfWWwzeCr9~3jyTQhX8DJ7I91TGwdBsO~-neMkuXyGvi5g9PtRsoVHhOkG-s5F6ZP3ZLCHZHzYf2fXtpVNrkEeLcVjO9W593F5-Bbsd7Ya6cE79xqUwyZhQQZ1Uz1oSSpYXaIddRmD1Bk8nFD4WF22XLQ1-6dwcTgywmtAxSQMNtP6xXg__&Key-Pair-Id=K3RDDB1TZ8BHT8',
      tags: ['future', 'space'],
      readTime: 6,
      href: '#',
      category: 'for-you',
    },
    {
      id: "newsListOUYGGY",
      title: 'GPT-4: A Bigger, Better, Faster, Stronger Model for OpenAI',
      src: 'https://ik.imagekit.io/geeekg65rf/imageEDTURYFUGHJ.png',
      tags: ['ai', 'GPT-4'],
      readTime: 7,
      href: '#',
      category: 'for-you',
    },
  ];

  res.json(newsList)
})

app.get('/topics', (req, res) => {
  console.log('request received to /topics')

  const topics = [
    {
      label: 'For You',
      id: 'for-you',
    },
    {
      label: 'AI',
      id: 'ai',
    },
    {
      label: 'Future',
      id: 'future',
    },
    {
      label: 'Biotech',
      id: 'biotech',
    },
    {
      label: 'GPT-4',
      id: 'gpt-4',
    },
    {
      label: 'Energy',
      id: 'energy',
    },
    {
      label: 'Human',
      id: 'human',
    }
  ]

  res.json(topics), 1000
})

app.get('/stories', (req, res) => {
  console.log('request received to /stories')
  const stories = [
    {
      name: 'CNBC',
      code: 'CNBC',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector.png',
      id: 'BOuiy078VO',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
        {
          title:
            'Advancements in Fission Reactor Technology: Powering the Future with Nuclear Energy',
          coverImage: 'https://ik.imagekit.io/geeekg65rf/image.pngGYGOGNYO',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        }, {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },

    {
      name: 'New York Time',
      code: 'NYT',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-1.png',
      id: 'U78IOOLIGHGH',
      stories: [
        {
          title:
            'Advancements in Fission Reactor Technology: Powering the Future with Nuclear Energy',
          coverImage: 'https://ik.imagekit.io/geeekg65rf/image.pngGYGOGNYO',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'Medium',
      code: 'MDM',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-2.png',
      id: 'OIUYG087OUy',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'Dev',
      code: 'DEV',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-3.png',
      id: '09IUOGH65',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'CBC',
      code: 'CBC',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-6.png',
      id: 'OIUH078',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'Fox',
      code: 'FOX',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-5.png',
      id: 'E12OUYg',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'Medium',
      code: 'MDM',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-2.png',
      id: 'OIUYG087OUy',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'Dev',
      code: 'DEV',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-3.png',
      id: '09IUOGH65',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'CBC',
      code: 'CBC',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-6.png',
      id: 'OIUH078',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
    {
      name: 'Fox',
      code: 'FOX',
      avatar: 'https://ik.imagekit.io/geeekg65rf/Vector-5.png',
      id: 'E12OUYg',
      stories: [
        {
          title:
            'A hypothetical point in time when artificial intelligence (AI) surpasses human capabilities',
          coverImage:
            'https://ik.imagekit.io/geeekg65rf/Create%20a%20modern%20258f9269-c684-4e8c-b941-d5a803ed8f77.png?updatedAt=1721231099572',
          readTime: 12,
          tags: ['Tech', 'AI'],
          href: '#',
        },
      ],
    },
  ];
  res.json(stories)

})
// Start the server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});