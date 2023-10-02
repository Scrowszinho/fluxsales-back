import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: UserEntity) {
    await this._userRepository.save(user);
  }

  async listUsers() {
    const users = await this._userRepository.find();
    return users;
  }
}
