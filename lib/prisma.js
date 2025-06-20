import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Error in connecting to database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
