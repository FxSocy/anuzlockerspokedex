<template>
  <div>
    <h1>{{ dexEntry?.name }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: { type: number; default: 0 };
}>();

const { data: dexEntry } = await useFetch("/api/pokemonDetailed", {
  params: [props.id],
});
</script>
