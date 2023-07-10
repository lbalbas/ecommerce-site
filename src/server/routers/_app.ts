import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import prisma from "../prisma";

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
        include: {
          departments: true,
        },
      });
      await prisma.$disconnect();
      return item || false; // Return false if item is null
    }),
  items: procedure.query(async () => {
    const items = await prisma.items.findMany();
    await prisma.$disconnect();
    return items;
  }),
  search: procedure
    .input(z.object({ search: z.string() }))
    .query(async (opts) => {
      const search = await prisma.items.findMany({
        where: {
          item: {
            search: opts.input.search,
          },
        },
      });
      await prisma.$disconnect();
      return search;
    }),
  featured: procedure.query(async (id) => {
    const featured = await prisma.items.findMany({ take: 10 });
    await prisma.$disconnect();
    return featured;
  }),
  collections: procedure.query(async () => {
    const collections = await prisma.collections.findMany();
    await prisma.$disconnect();
    return collections;
  }),
  collectionItems: procedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const search = await prisma.items.findMany({
        where: {
          collection: opts.input.id,
        },
        include: {
          collections: true,
        },
      });
      await prisma.$disconnect();
      return search.length > 0 ? search : false; // Return false if search results are empty
    }),
  departments: procedure.query(async () => {
    const departments = await prisma.departments.findMany();
    await prisma.$disconnect();
    return departments;
  }),
  departmentItems: procedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const search = await prisma.items.findMany({
        where: {
          department: opts.input.id,
        },
        include: {
          departments: true,
        },
      });
      await prisma.$disconnect();
      return search.length > 0 ? search : false; // Return false if search results are empty
    }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
