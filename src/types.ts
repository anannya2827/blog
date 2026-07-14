export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  createdAt: string;
  author: string;
  authorAvatar: string;
  category: string;
  readTime: string;
  useGradient?: boolean; 
}
