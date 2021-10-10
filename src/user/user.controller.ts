import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<void> {
    return await this.userService.createUser(userData);
  }
}
