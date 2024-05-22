import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @MaxLength(50)
  primer_nombre?: string;

  @IsString()
  @MaxLength(50)
  segundo_nombre?: string;

  @IsString()
  @MaxLength(50)
  primer_apellido?: string;

  @IsString()
  @MaxLength(50)
  segundo_apellido?: string;

  @IsString()
  @MaxLength(100)
  @IsEmail()
  correo?: string;

  @IsString()
  @MaxLength(100)
  clave?: string;

  @IsString()
  @MaxLength(100)
  direccion_fisica?: string;

  @IsString()
  @MaxLength(30)
  numero_telefono?: string;
}
