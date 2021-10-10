import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<void> {
    const user = Prisma.validator<Prisma.UserCreateInput>()(data);

    console.log(user);

    // return this.prisma.user.create({
    //   user,
    // });
  }
}
