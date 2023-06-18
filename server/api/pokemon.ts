export default defineEventHandler(async (event) => {
  const fullDex = await event.context.prisma.pokemon.findMany({
    orderBy: [
      {
        dex_number: "asc",
      },
    ],
    include: {
      pokemon_sprites: true,
    },
  });

  return fullDex;
});
