import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é invalido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter ao menos 6 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'O documento não pode ser vazio' })
  document: string;

  @IsNotEmpty({ message: 'O número de telefone não pode ser vazio' })
  phone: string;

  @IsNotEmpty({ message: 'A data de nascimento não pode ser vazio' })
  bornDate: Date;
}
