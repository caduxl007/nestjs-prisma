import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: '6cbb7115-0999-4e8f-84d4-00c789c5f66d',
      },
    });

    return await this.prismaService.post.create({
      data: {
        title: data.title,
        author: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  }
}
