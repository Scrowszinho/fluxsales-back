import { IsString } from 'class-validator';
import { PickType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsString()
  phoneNumber: string;
}

export class UpdateUserDto extends PickType(CreateUserDto, [
  'email',
  'password',
  'name',
  'document',
  'phoneNumber',
] as const) {}
