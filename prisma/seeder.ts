import { PrismaClient } from '@prisma/client';
import { roles } from './constants/roles';
import { faker } from '@faker-js/faker/locale/es';
import { rolSeeder } from './seeders/rol.seeder';
import { usuarioSeeder } from './seeders/usuario.seeder';

const prisma = new PrismaClient();

const main = async () => {
  await clearDatabase();
  await rolSeeder(prisma);
  await usuarioSeeder(prisma, faker);
};

async function clearDatabase() {
  await prisma.usuario.deleteMany();
  await prisma.$executeRawUnsafe(
    'ALTER SEQUENCE usuario_id_usuario_seq RESTART WITH 1;',
  );

  await prisma.rol.deleteMany();
  await prisma.$executeRawUnsafe(
    'ALTER SEQUENCE rol_id_rol_seq RESTART WITH 1;',
  );
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    prisma.$disconnect;
  });
