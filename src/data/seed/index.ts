import { seedThreads } from "./seedThreads";
import { seedUsers } from "./seedUsers";

export function seedDatabase() {
  seedUsers();
  seedThreads();
}
