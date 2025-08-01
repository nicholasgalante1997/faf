export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
    location?: string;
    university?: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
    location?: string;
    university?: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}
