import { Module } from '@nestjs/common';
import { DatabasesModule } from 'src/shared/database/database.module';
import { UserService } from './user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [DatabasesModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
