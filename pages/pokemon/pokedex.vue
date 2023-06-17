<template>
  <div class="w-full">
    <div class="w-full flex justify-center py-5">
      <div
        class="h-20 w-100 bg-red-500 flex items-center border border-5 border-red-800"
      >
        <h2 class="text-center font-8bit font-bold text-2xl w-full py-6">
          Nat Dex
        </h2>
      </div>
    </div>
    <div class="flex flex-wrap justify-between w-full">
      <div class="w-33% h-20 text-center" v-for="dexEntry in fullDex">
        {{ dexEntry.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: fullDex } = await useFetch("/api/pokemon");
const sprite_url_prefix = "https://img.pokemondb.net/sprites/";
console.log(fullDex.value);
</script>
