<template>
  <div
    class="bg-gray-300 w-full flex flex-wrap justify-center shadow-lg m-2 rounded-10 border-3 border-lime-700"
  >
    <div class="w-60% -mb-8 mt-2 font-8bit text-left text-size-xs">
      {{ "Dex No." + props.dexNo }}
    </div>
    <NuxtLink :to="'/pokemon/' + props.name.toLowerCase()">
      <img
        class="w-30 h-30 m-2 -mt-4 mb-6"
        :src="createUrl(props.name.toLowerCase())"
        :alt="props.name"
      />
      <div class="text-center font-8bit font-bold text-xl w-full -mt-4">
        {{ props.name }}
      </div>
    </NuxtLink>
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
  primaryType: PokemonTypes;
  secondaryType: PokemonTypes | null;
}>();

function createUrl(name: string) {
  if (typeof name === "undefined" || name === "") {
    return "https://img.pokemondb.net/sprites/black-white/shiny/ditto.png";
  }
  if (name.includes(" ")) {
    name = name.replace(" ", "-");
  }
  const urlPrefix =
    "https://ejrzyqruttauvqzmiras.supabase.co/storage/v1/object/public/pokemon_sprites_raw/sprites/";
  return urlPrefix + name + ".png";
}
</script>
