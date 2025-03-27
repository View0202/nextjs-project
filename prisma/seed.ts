import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // console.log("🌱 Seeding database...");

  // Hash Password
  const hashedPassword = await bcrypt.hash("admin123", 10);

  // Insert Users
  await prisma.users.createMany({
    data: [
      {
        firstname: "Customer",
        lastname: "User",
        username: "customeruser",
        password: hashedPassword,
        status: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  // console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
