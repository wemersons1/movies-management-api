import { HASH_SALT } from "../../constants/password_config";
import { ADMIN } from "../../constants/roles";
import dbClient from "../../src/dbClient";
import bcrypt from 'bcrypt';

export const userSeeder = async () => {
    await dbClient.user.upsert({
        where: { email: 'admin@test.com' },
        update: {},
        create: {
            email: 'admin@test.com',
            first_name: 'Admin',
            last_name: 'Admin',
            role_id: ADMIN,
            birth_day: '2000-01-01',
            password: await bcrypt.hash('12345678', HASH_SALT)
        },
    });  
}