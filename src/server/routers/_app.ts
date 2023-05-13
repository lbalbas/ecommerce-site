import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const allItems = await prisma.items.findMany();

	return allItems;
}

export const appRouter = router({
	items: procedure.query(() => {
		main()
			.then(async () => {
				await prisma.$disconnect();
			})
			.catch(async (e) => {
				console.error(e);
				await prisma.$disconnect();
				process.exit(1);
			});
	}),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
