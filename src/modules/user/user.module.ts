import { Module } from '@nestjs/common';
import { UserController } from 'src/modules/user/controllers/user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
