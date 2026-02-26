import { PostStatus } from '../enums/post-status.enum';

//interface
export interface Post {
<<<<<<< HEAD
  id: number;
=======
  id: number;           
>>>>>>> 955e2473c7c6e2f9b3f77221064fd32888ff4696
  title: string;
  content: string;
  author: string;
  status: PostStatus;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;      
}