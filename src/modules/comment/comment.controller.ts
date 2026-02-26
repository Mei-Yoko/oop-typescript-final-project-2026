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
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Comments') // สำหรับ Phase 6: Swagger
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: 'สร้างคอมเมนต์ใหม่' })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({ summary: 'ดึงคอมเมนต์ทั้งหมดในระบบ' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
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
  }
}