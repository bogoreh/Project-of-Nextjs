export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  isPublished: boolean;
}

export type CreatePostInput = Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt'>;
export type UpdatePostInput = Partial<CreatePostInput>;