import { Module } from '@nestjs/common';
import { DatabaseProvider } from './datasource.provider';

@Module({
  providers: [DatabaseProvider],
  exports: [DatabaseProvider],
})
export class DatabasesModule {}
