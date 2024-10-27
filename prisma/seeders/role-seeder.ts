import dbClient from "../../src/dbClient";

export const roleSeeder = async () => {
    await dbClient.role.upsert({
        where: { name: 'Admin' },
        update: {},
        create: {
        id: 1,
          name: 'Admin',
        },
      });

    await dbClient.role.upsert({
        where: { name: 'Default' },
        update: {},
        create: {
        id: 2,
            name: 'Default',
        },
    });
}