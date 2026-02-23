import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  // สร้าง Array จำลองเป็นฐานข้อมูลชั่วคราว
  private comments: Comment[] = [];
  private idCounter = 1;

  // 1. สร้างคอมเมนต์ใหม่
  create(createCommentDto: CreateCommentDto): Comment {
    const newComment: Comment = {
      id: this.idCounter++,
      ...createCommentDto,
    };
    this.comments.push(newComment);
    return newComment;
  }

  // 2. ดึงคอมเมนต์ทั้งหมด
  findAll(): Comment[] {
    return this.comments;
  }

  // 3. ดึงคอมเมนต์ตาม ID
  findOne(id: number): Comment {
    const comment = this.comments.find((c) => c.id === id);
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  // 4. แก้ไขคอมเมนต์
  update(id: number, updateCommentDto: UpdateCommentDto): Comment {
    const index = this.comments.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    // อัปเดตข้อมูลเฉพาะที่ส่งมา (เพราะคุณใช้ @IsOptional ไว้ใน DTO)
    this.comments[index] = {
      ...this.comments[index],
      ...updateCommentDto,
    };

    return this.comments[index];
  }

  // 5. ลบคอมเมนต์
  remove(id: number): void {
    const index = this.comments.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    this.comments.splice(index, 1);
  }
}