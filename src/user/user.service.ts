import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data,
      });

      return user;
    } catch (err) {
      if (err.code === 'P2002') {
        throw new ConflictException('E-mail ja utilizado');
      }
    }
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
