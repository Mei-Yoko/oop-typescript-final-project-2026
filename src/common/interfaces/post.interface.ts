import { PostStatus } from '../enums/post-status.enum';

export interface Post {
	id: string;
	title: string;
	content: string;
	author: string;
	status: PostStatus;
	tags?: string[];
	createdAt: string;
	updatedAt: string;
}
