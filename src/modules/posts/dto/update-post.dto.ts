import { IsString, IsNotEmpty, IsEnum, IsArray, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PostStatus } from '../../../common/enums';

export class UpdatePostDto {
  @ApiProperty({
    description: 'Title of the post',
    example: 'My Updated Blog Post',
    minLength: 1,
    maxLength: 200,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Content of the post',
    example: 'This is the updated content...',
    minLength: 1,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  content?: string;

  @ApiProperty({
    description: 'Author name',
    example: 'John Doe',
    minLength: 1,
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  @IsOptional()
  author?: string;

  @ApiProperty({
    description: 'Status of the post',
    enum: PostStatus,
    example: PostStatus.PUBLISHED,
    required: false,
  })
  @IsEnum(PostStatus)
  @IsOptional()
  status?: PostStatus;

  @ApiProperty({
    description: 'Tags for the post',
    example: ['technology', 'programming', 'nestjs'],
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
  createdAt?: Date;

  @ApiProperty({
    description: 'Date the post was last updated',
    example: '2026-02-16T12:00:00.000Z',
    required: false,
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsString()
  updatedAt?: Date;
}