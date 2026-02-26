<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('comments') // แยกหมวดหมู่ใน Swagger
@Controller('comments') // กำหนด Path หลักเป็น /comments
=======
import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  ParseIntPipe 
} from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Comments') // สำหรับ Phase 6: Swagger
@Controller('comments')
>>>>>>> da25956c11011ed9db09f6bba6daf670bb87103e
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
<<<<<<< HEAD
  @ApiOperation({ summary: 'Create a new comment' }) // คำอธิบายใน Swagger
  create(@Body() createCommentDto: CreateCommentDto) {
    // ใช้ DTO ที่เขียนไว้มาตรวจข้อมูล
=======
  @ApiOperation({ summary: 'สร้างคอมเมนต์ใหม่' })
  create(@Body() createCommentDto: CreateCommentDto) {
>>>>>>> da25956c11011ed9db09f6bba6daf670bb87103e
    return this.commentsService.create(createCommentDto);
  }

  @Get()
<<<<<<< HEAD
  @ApiOperation({ summary: 'Get all comments' })
=======
  @ApiOperation({ summary: 'ดึงคอมเมนต์ทั้งหมดในระบบ' })
>>>>>>> da25956c11011ed9db09f6bba6daf670bb87103e
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
<<<<<<< HEAD
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
=======
  @ApiOperation({ summary: 'ดึงคอมเมนต์ตาม ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'แก้ไขคอมเมนต์' })
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateCommentDto: UpdateCommentDto
  ) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ลบคอมเมนต์' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.remove(id);
>>>>>>> da25956c11011ed9db09f6bba6daf670bb87103e
  }
}