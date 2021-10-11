import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() userData: { name: string; email: string },
  ): Promise<UserModel> {
    return await this.userService.createUser(userData);
  }

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return await this.userService.getUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return await this.userService.getUserById(id);
  }
}
