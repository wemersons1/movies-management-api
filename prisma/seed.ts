import dbClient from "../src/dbClient";
import { movieGenderSeeder } from "./seeders/movie-gender-seeder";
import { roleSeeder } from "./seeders/role-seeder";
import { userSeeder } from "./seeders/user-seeder";

async function main() {
    await roleSeeder();
    await userSeeder();
    await movieGenderSeeder();
}

main()
  .then(async () => {
    await dbClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await dbClient.$disconnect()
    process.exit(1)
  })