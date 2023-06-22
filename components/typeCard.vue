<template>
  <div
    class="font-mono w-40% h-12% border-2 text-center rounded-2 text-size-xs"
    :class="getTypeColor(pokemon_type)"
  >
    {{ props.pokemon_type }}
  </div>
</template>

<script setup lang="ts">
import { PokemonTypes } from "@prisma/client";

const props = defineProps<{
  pokemon_type: PokemonTypes | null;
}>();

function getTypeColor(pokemonType: PokemonTypes | null) {
  switch (pokemonType) {
    case PokemonTypes.Normal:
      return "bg-gray-400";
    case PokemonTypes.Fire:
      return "bg-red-500";
    case PokemonTypes.Water:
      return "bg-blue-400";
    case PokemonTypes.Electric:
      return "bg-yellow-500";
    case PokemonTypes.Grass:
      return "bg-green-500";
    case PokemonTypes.Ice:
      return "bg-blue-200";
    case PokemonTypes.Fighting:
      return "bg-red-800";
    case PokemonTypes.Poison:
      return "bg-purple-500";
    case PokemonTypes.Ground:
      return "bg-yellow-800";
    case PokemonTypes.Flying:
      return "bg-blue-300";
    case PokemonTypes.Psychic:
      return "bg-purple-300";
    case PokemonTypes.Bug:
      return "bg-lime-300";
    case PokemonTypes.Rock:
      return "bg-yellow-400";
    case PokemonTypes.Ghost:
      return "bg-purple-800";
    case PokemonTypes.Dragon:
      return "bg-blue-600";
    case PokemonTypes.Dark:
      return "bg-gray-800";
    case PokemonTypes.Steel:
      return "bg-gray-400";
    case PokemonTypes.Fairy:
      return "bg-pink-300";
    default:
      throw new Error("Invalid Pokemon Type");
  }
}
</script>
