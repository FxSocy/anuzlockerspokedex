<template>
  <div class="w-full">
    <div class="w-full flex justify-center pb-5">
      <div
        class="h-20 w-100 bg-red-500 rounded-2 flex items-center border border-5 border-red-800"
      >
        <h2 class="text-center font-8bit font-bold text-2xl w-full py-6">
          National Pokedex
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-center w-full">
      <div class="flex justify-center" v-for="dexEntry in fullDex">
        <pokemon-card
          class="w-50 h-50"
          :name="dexEntry.name"
          :dexNo="dexEntry.dex_number"
          :primaryType="dexEntry.primary_type"
          :secondaryType="dexEntry.secondary_type"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: fullDex } = await useFetch("/api/pokemon");
//console.log(fullDex.value);
</script>
