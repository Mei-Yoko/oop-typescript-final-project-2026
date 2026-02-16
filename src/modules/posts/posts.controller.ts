import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  Put, 
  Patch,
  HttpStatus 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('posts') 
@Controller('posts')
export class PostsController {
  

  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ summary: 'สร้างโพสต์ใหม่' })
  @ApiResponse({ status: 201, description: 'สร้างสำเร็จ' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'ดึงข้อมูลโพสต์ทั้งหมด' })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id') 
  @ApiOperation({ summary: 'ดึงข้อมูลโพสต์ตาม ID' })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'แก้ไขโพสต์บางส่วน' })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ลบโพสต์' })
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}