export default defineEventHandler((event) => {
  event.context.prisma.pokemon.findMany();
  return {
    hello: "world",
  };
});
