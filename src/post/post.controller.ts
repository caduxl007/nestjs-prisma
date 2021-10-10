import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async createPost(@Body() dataPost: { title: string }): Promise<PostModel> {
    return await this.postService.createPost(dataPost);
  }
}
