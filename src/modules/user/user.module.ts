import { Module } from '@nestjs/common';
import { UserController } from 'src/modules/user/controllers/user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user_repository.prisma';
import { DatabasesModule } from 'src/shared/database/database.module';

@Module({
  imports: [DatabasesModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
