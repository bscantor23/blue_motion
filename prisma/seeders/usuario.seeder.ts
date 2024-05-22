import { Faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const QUANTITY = 1000;

export const usuarioSeeder = async (prisma: PrismaClient, faker: Faker) => {
  let rolesRegistrados = await prisma.rol.findMany();

  let users = [];
  for (let i = 0; i < QUANTITY; i++) {
    users.push({
      id_rol: faker.helpers.arrayElement(rolesRegistrados).id_rol,
      numero_identificacion: faker.helpers.replaceSymbols(
        '###################',
      ),
      primer_nombre: faker.person.firstName(),
      segundo_nombre: faker.person.firstName(),
      primer_apellido: faker.person.middleName(),
      segundo_apellido: faker.person.middleName(),
      correo:
        faker.internet.email() +
        faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      clave: faker.internet.password(),
      direccion_fisica: faker.location.streetAddress(),
      numero_telefono: faker.phone.number(),
    });
  }

  await prisma.usuario.createMany({
    data: [...users],
  });
};
