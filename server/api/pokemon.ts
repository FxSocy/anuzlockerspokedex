export default defineEventHandler(async (event) => {
  const fullDex = await event.context.prisma.pokemon.findMany();
  return fullDex;
});
