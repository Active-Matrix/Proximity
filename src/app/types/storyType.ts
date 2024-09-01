export type Tstories = Array<{
  title: string;
  coverImage: string;
  readTime: number;
  tags: string[];
  href: string;
}>;

export type StoryType = {
  name: string;
  code: string;
  avatar: string;
  id: string;
  stories: Tstories
};