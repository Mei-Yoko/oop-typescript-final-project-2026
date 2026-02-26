import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('comments') // แยกหมวดหมู่ใน Swagger
@Controller('comments') // กำหนด Path หลักเป็น /comments
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new comment' }) // คำอธิบายใน Swagger
  create(@Body() createCommentDto: CreateCommentDto) {
    // ใช้ DTO ที่เขียนไว้มาตรวจข้อมูล
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all comments' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a comment by ID' })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a comment' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    // ใช้ UpdateCommentDto แก้เรื่อง @IsOptional เพื่อให้สามารถอัปเดตเฉพาะบางฟิลด์ได้
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a comment' })
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}