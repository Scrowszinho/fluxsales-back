import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(user) {
    return user;
  }
}
