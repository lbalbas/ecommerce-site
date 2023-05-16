import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allItems = await prisma.items.findMany();
  return convertBigIntsToStrings(allItems);
}

function convertBigIntsToStrings(items) {
  return items.map((item) => ({
    ...item,
    id: item.id.toString(),
    collection: item.collection ? item.collection.toString() : null,
    stock: item.stock.toString(),
  }));
}

export const appRouter = router({
  items: procedure.query(async () => {
    const items = await main(); // Wait for the result of main() function
    await prisma.$disconnect(); // Disconnect from Prisma after getting the result
    return items;
  }),
  featured: procedure.query(async () => {
    const featured = await prisma.items.findMany({ take: 4 });
    await prisma.$disconnect(); // Disconnect from Prisma after getting the result
    return convertBigIntsToStrings(featured);
  }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
