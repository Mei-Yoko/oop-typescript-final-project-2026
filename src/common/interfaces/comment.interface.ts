//interface
export interface Comment {
    id: number;
<<<<<<< HEAD
    postId: string;
    author: string;
    content: string;
=======
    postId: number;      
    authorName: string;  
    message: string;     
>>>>>>> da25956c11011ed9db09f6bba6daf670bb87103e
    createdAt: Date;
    updatedAt?: Date;   
}