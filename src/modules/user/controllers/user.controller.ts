import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user) {
    return this.userService.createUser(user);
  }
}
