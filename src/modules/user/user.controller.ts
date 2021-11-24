import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/list')
  async getList() {
    const result = await this.userService.getList();
    return result;
  }

  @Get('/:id/info')
  async getInfo(@Param('id') id: string) {
    const result = await this.userService.getInfo(id);
    return result;
  }

  @Post('/info')
  async createUser(@Body() user: User) {
    const result = await this.userService.createUser(user);
    return result;
  }
}
