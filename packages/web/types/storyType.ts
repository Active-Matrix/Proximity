export type StoryType = {
  name: string;
  code: string;
  avatar: string;
  id: string;
  stories: Array<{
    title: string;
    coverImage: string;
    readTime: number;
    tags: string[];
    href: string;
  }>;
};