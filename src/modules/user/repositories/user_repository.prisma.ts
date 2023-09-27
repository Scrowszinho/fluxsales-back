import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.inteface';
import { PrismaClient } from '@prisma/client';
import { IUserRepository } from './user_repository.inteface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private datasource: PrismaClient) {}

  createUser(user: IUser) {
    const { email, password, name, document, phoneNumber } = user;
    return this.datasource.users.create({
      data: {
        email,
        password,
        name,
        document,
        phoneNumber,
      },
    });
  }

  deleteUserById(...args: any[]) {}

  getUserById(...args: any[]) {}

  getUsers(...args: any) {}

  updateUser(...args: any[]) {}
}
