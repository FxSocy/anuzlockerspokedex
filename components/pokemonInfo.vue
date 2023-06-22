<template>
  <div></div>
</template>

<script setup lang="ts">
import { PokemonTypes } from "@prisma/client";

const props = defineProps<{
  name: string;
  dexNo: number;
  primaryType: PokemonTypes;
  secondaryType: PokemonTypes | null;
}>();
</script>
