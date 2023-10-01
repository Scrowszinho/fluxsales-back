import { Module } from '@nestjs/common';
import { DatabasesModule } from 'src/shared/database/database.module';

@Module({
  imports: [DatabasesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserModule {}
