import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostStatus } from '../../common/enums';
import { Post } from '../../common/interfaces';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private idCounter = 1; 

  create(createPostDto: CreatePostDto): Post {
    const newPost: Post = {
      id: this.idCounter++, 
      ...createPostDto,
      status: createPostDto.status || PostStatus.DRAFT,
      tags: createPostDto.tags || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }


  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: string): Post {
    const post = this.posts.find((p) => Number(p.id) === Number(id));
    if (!post) {
      throw new NotFoundException(`ไม่พบโพสต์ที่มี ID: ${id}`);
    }
    return post;
  }

  update(id: string, updatePostDto: UpdatePostDto): Post {
    const index = this.posts.findIndex((p) => Number(p.id) === Number(id));
    if (index === -1) throw new NotFoundException('ไม่พบโพสต์ที่ต้องการแก้ไข');

    this.posts[index] = {
      ...this.posts[index],
      ...updatePostDto,
      updatedAt: new Date(),
    };

    return this.posts[index];
  }

  remove(id: string): string {
    const index = this.posts.findIndex((p) => Number(p.id) === Number(id));
    if (index === -1) throw new NotFoundException('ไม่พบโพสต์ที่ต้องการลบ');
    
    this.posts.splice(index, 1);
    return `ลบโพสต์ ID: ${id} เรียบร้อยแล้ว`;
  }
}