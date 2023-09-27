import { Module } from '@nestjs/common';
import { UserController } from 'src/modules/user/controllers/user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user_repository.prisma';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
