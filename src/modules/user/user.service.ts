import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user_repository.prisma';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  createUser(user) {
    return this.repository.createUser(user);
  }
}
