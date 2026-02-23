import { IsString, IsNotEmpty, IsEnum, IsArray, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PostStatus } from '../../../common/enums/post-status.enum';

export class CreatePostDto {
  @ApiProperty({
    description: 'Title of the post',
    example: 'My First Blog Post',
    minLength: 1,
    maxLength: 200,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  title: string;

  @ApiProperty({
    description: 'Content of the post',
    example: 'This is the content of my first blog post...',
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  content: string;

  @ApiProperty({
    description: 'Author name',
    example: 'John Doe',
    minLength: 1,
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  author: string;

  @ApiProperty({
    description: 'Status of the post',
    enum: PostStatus,
    example: PostStatus.DRAFT,
    required: false,
    default: PostStatus.DRAFT,
  })
  @IsEnum(PostStatus)
  @IsOptional()
  status?: PostStatus;

  @ApiProperty({
    description: 'Tags for the post',
    example: ['technology', 'programming'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    description: 'Date the post was created',
    example: '2026-02-16T12:00:00.000Z',
    required: false,
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsString()
  createdAt?: string;

  @ApiProperty({
    description: 'Date the post was last updated',
    example: '2026-02-16T12:00:00.000Z',
    required: false,
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsString()
  updatedAt?: string;
}