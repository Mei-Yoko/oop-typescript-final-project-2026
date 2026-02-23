import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, HttpStatus, HttpCode, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CreatePostDto, UpdatePostDto } from './dto';
import { PostsService } from './posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Get()
	@ApiOperation({ summary: 'Get all posts' })
	@ApiResponse({ status: 200, description: 'List of posts.' })
	async findAll() {
		// return this.postsService.findAll();
		return { success: true, message: 'Fetched all posts', data: [] };
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get post by id' })
	@ApiParam({ name: 'id', type: 'string' })
	@ApiResponse({ status: 200, description: 'Post found.' })
	@ApiResponse({ status: 404, description: 'Post not found.' })
	async findOne(@Param('id') id: string) {
		// return this.postsService.findOne(id);
		return { success: true, message: 'Fetched post', data: null };
	}

	@Post()
	@ApiOperation({ summary: 'Create a new post' })
	@ApiResponse({ status: 201, description: 'Post created.' })
	async create(@Body() createPostDto: CreatePostDto) {
		// return this.postsService.create(createPostDto);
		return { success: true, message: 'Post created', data: null };
	}

	@Put(':id')
	@ApiOperation({ summary: 'Replace a post by id' })
	@ApiParam({ name: 'id', type: 'string' })
	@ApiResponse({ status: 200, description: 'Post replaced.' })
	@ApiResponse({ status: 404, description: 'Post not found.' })
	async replace(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
		// return this.postsService.replace(id, updatePostDto);
		return { success: true, message: 'Post replaced', data: null };
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update a post by id' })
	@ApiParam({ name: 'id', type: 'string' })
	@ApiResponse({ status: 200, description: 'Post updated.' })
	@ApiResponse({ status: 404, description: 'Post not found.' })
	async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
		// return this.postsService.update(id, updatePostDto);
		return { success: true, message: 'Post updated', data: null };
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete a post by id' })
	@ApiParam({ name: 'id', type: 'string' })
	@ApiResponse({ status: 200, description: 'Post deleted.' })
	@ApiResponse({ status: 404, description: 'Post not found.' })
	async remove(@Param('id') id: string) {
		// return this.postsService.remove(id);
		return { success: true, message: 'Post deleted', data: null };
	}
}
