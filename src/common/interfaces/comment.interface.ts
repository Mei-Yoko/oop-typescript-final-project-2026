//interface
export interface Comment {
    id: number;
    postId: string;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }