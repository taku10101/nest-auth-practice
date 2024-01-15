import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private user: UserService) {}
  @Get()
  findAll() {
    return this.user.finedAll();
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.user.create(createUserDto);
  }
}
