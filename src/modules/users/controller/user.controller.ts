import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserEntity } from '../user.entity';
import { ListUserDTO } from '../dto/list-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    const newUser = new UserEntity();
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.name = user.name;
    newUser.phone = user.phone;
    newUser.document = user.document;
    newUser.bornDate = new Date(user.bornDate);

    this._userService.createUser(newUser);
    return {
      message: 'Usuario criado com sucesso',
      data: new ListUserDTO(newUser.name, newUser.id),
    };
  }

  @Get()
  async listUsers() {
    const users = await this._userService.listUsers();
    return users;
  }
}
