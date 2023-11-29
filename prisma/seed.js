import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

async function seed() {
  const data = await prisma.bahan.createMany({
    data: [
      {
        id: 1,
        name: "Orange",
        image: "orang_url"
      },
      {
        id: 2,
        name: "Banana",
        image: "banana_url"
      },
      {
        id: 3,
        name: "Apple",
        image: "apple_url"
      },
      {
        id: 4,
        name: "Grapes",
        image: "grapes_url"
      }
    ],
  });
}

try
{
  await seed();
  await prisma.$disconnect();
} catch (e)
{
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
