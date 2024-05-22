import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNumber()
  @IsNotEmpty()
  id_rol: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  numero_identificacion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  primer_nombre: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  segundo_nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  primer_apellido: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  segundo_apellido: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  clave: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  direccion_fisica: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  numero_telefono: string;
}
