<template>
  <div
    class="bg-gray-300 w-full flex flex-wrap justify-center shadow-lg m-2 rounded-10 border-3 border-lime-700"
  >
    <div class="w-60% -mb-8 mt-2 font-8bit text-left text-size-xs">
      {{ "Dex No." + props.dexNo }}
    </div>
    <img
      v-if="url?.includes('scarlet-violet')"
      class="w-45 h-45 mb-10 -mt-4 mx-4"
      :src="createUrl(props.url)"
      :alt="props.name"
    />
    <img
      v-else
      class="w-45 h-45 m-2"
      :src="createUrl(props.url)"
      :alt="props.name"
    />
    <div class="text-center font-8bit font-bold text-2xl w-full -mt-4">
      {{ props.name }}
    </div>
    <TypeCard class="-mt-2" :pokemon_type="props.primaryType" />
    <TypeCard
      class="-mt-2"
      v-if="props.secondaryType !== null"
      :pokemon_type="props.secondaryType"
    />
  </div>
</template>

<script setup lang="ts">
import { PokemonTypes } from "@prisma/client";

const props = defineProps<{
  name: string;
  dexNo: number;
  url: string | undefined;
  primaryType: PokemonTypes;
  secondaryType: PokemonTypes | null;
}>();

function createUrl(urlPostfix: string | undefined) {
  if (typeof urlPostfix === "undefined" || urlPostfix === "") {
    return "https://img.pokemondb.net/sprites/black-white/shiny/ditto.png";
  }
  const urlPrefix = "https://img.pokemondb.net/sprites/";
  return urlPrefix + urlPostfix;
}
</script>
