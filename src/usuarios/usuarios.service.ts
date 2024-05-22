import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    console.log(createUsuarioDto);

    return this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id_usuario: number) {
    return this.prisma.usuario.findUnique({
      where: { id_usuario },
    });
  }

  update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    console.log(updateUsuarioDto)

    return this.prisma.usuario.update({
      where: { id_usuario },
      data: updateUsuarioDto,
    });
  }

  remove(id_usuario: number) {
    return this.prisma.usuario.delete({
      where: {
        id_usuario,
      },
    });
  }
}
