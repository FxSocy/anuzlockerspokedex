<template>
  <div class="w-full flex flex-wrap justify-center">
    <div
      class="h-20 w-100 bg-gray-300 rounded-2 text-center border border-5 border-gray-400"
    >
      <h1 class="font-8bit text-center text-size-2xl my-4">
        {{ dexEntry?.name }}
      </h1>
    </div>
    <div
      class="w-200 min-h-180 bg-gray-300 rounded-2 border border-5 border-gray-400 m-5"
    >
      <div class="grid grid-cols-3 justify-center w-full">
        <img
          class="w-50 h-50 m-2"
          :src="createUrl(dexEntry?.name.toLowerCase())"
          :alt="dexEntry?.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: dexEntry } = await useFetch("/api/detailed", {
  query: { name: capitalizeFirstLetter(route.params.slug) },
});

console.log(dexEntry.value);
const pokemon_id = dexEntry.value?.id;

console.log(dexEntry.value);

function capitalizeFirstLetter(string: string | string[]) {
  if (typeof string === "object") {
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1) + "";
}

function createUrl(name: string | undefined) {
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
