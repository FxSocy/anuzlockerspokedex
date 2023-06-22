export default defineEventHandler(async (event) => {
  const parameters = getQuery(event) as { name: string };
  const dexEntry = await event.context.prisma.pokemon.findFirst({
    where: {
      name: parameters.name,
    },
    include: {
      pokemon_info_detailed: true,
    },
  });
  return dexEntry;
});
