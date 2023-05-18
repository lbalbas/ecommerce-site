import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
const prisma = new PrismaClient();

export const appRouter = router({
  item: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async (opts) => {
      const item = await prisma.items.findUnique({
        where: { id: opts.input.id },
      }); // Wait for the result of main() function
      await prisma.$disconnect(); // Disconnect from Prisma after getting the result
      return item;
    }),
  items: procedure.query(async () => {
    const items = await prisma.items.findMany(); // Wait for the result of main() function
    await prisma.$disconnect(); // Disconnect from Prisma after getting the result
    return items;
  }),
  featured: procedure.query(async (id) => {
    const featured = await prisma.items.findMany({ take: 4 });
    await prisma.$disconnect(); // Disconnect from Prisma after getting the result
    return convertBigIntsToStrings(featured);
  }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
