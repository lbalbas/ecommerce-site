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
      });
      await prisma.$disconnect();
      return item;
    }),
  items: procedure.query(async () => {
    const items = await prisma.items.findMany();
    await prisma.$disconnect();
    return items;
  }),
  featured: procedure.query(async (id) => {
    const featured = await prisma.items.findMany({ take: 4 });
    await prisma.$disconnect(); 
    return featured;
  }),
  collections: procedure.query(async () => {
    const collections = await prisma.collections.findMany()
    await prisma.$disconnect();
    return collections;
  }),
  deparments: procedure.query(async () => {
    const departments = await prisma.departments.findMany()
    await prisma.$disconnect();
    return departments; 
  }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
