import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../../common/interfaces/post.interface';
import { PostStatus } from '../../common/enums/post-status.enum';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
@Injectable()
export class PostsService {
	private posts: Post[] = [];
	private nextId = 1;

	findAll(): Post[] {
		return this.posts;
	}

	findOne(id: string | number): Post {
		const idStr = String(id);
		const post = this.posts.find((p) => p.id === idStr);
		if (!post) throw new NotFoundException('Post not found');
		return post;
	}

	create(dto: CreatePostDto): Post {
		const now = new Date().toISOString();
		const post: Post = {
			id: String(this.nextId++), // id is string but numeric
			title: dto.title,
			content: dto.content,
			author: dto.author,
			status: dto.status ?? PostStatus.DRAFT,
			tags: dto.tags ?? [],
			createdAt: now,
			updatedAt: now,
		};
		this.posts.push(post);
		return post;
	}

	update(id: string | number, dto: UpdatePostDto): Post {
		const post = this.findOne(id);
		if (dto.title !== undefined) post.title = dto.title;
		if (dto.content !== undefined) post.content = dto.content;
		if (dto.author !== undefined) post.author = dto.author;
		if (dto.status !== undefined) post.status = dto.status;
		if (dto.tags !== undefined) post.tags = dto.tags;
		post.updatedAt = new Date().toISOString();
		return post;
	}

	replace(id: string | number, dto: UpdatePostDto): Post {
		const idStr = String(id);
		const idx = this.posts.findIndex((p) => p.id === idStr);
		if (idx === -1) throw new NotFoundException('Post not found');
		const now = new Date().toISOString();
		const old = this.posts[idx];
		const post: Post = {
			id: idStr,
			title: dto.title ?? old.title,
			content: dto.content ?? old.content,
			author: dto.author ?? old.author,
			status: dto.status ?? old.status,
			tags: dto.tags ?? old.tags,
			createdAt: old.createdAt,
			updatedAt: now,
		};
		this.posts[idx] = post;
		return post;
	}

	remove(id: string | number): void {
		const idStr = String(id);
		const idx = this.posts.findIndex((p) => p.id === idStr);
		if (idx === -1) throw new NotFoundException('Post not found');
		this.posts.splice(idx, 1);
	}
}
