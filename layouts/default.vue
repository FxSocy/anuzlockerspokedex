<template>
  <div
    class="static flex justify-center flex-wrap min-h-screen bg-fixed bg-contain"
    style="background-image: url('/pokemonpixelart2.jpeg')"
  >
    <div
      class="absolute flex border border-5 border-red-800 justify-between p-0 w-full h-20 bg-red-500"
    >
      <NuxtLink to="/" class="font-8bit font-bold text-xl px-10 py-5"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/pokemon/pokedex"
        class="font-8bit font-bold text-xl px-10 py-5"
        >Pokedex</NuxtLink
      >
      <NuxtLink
        to="/pokemon/search"
        class="font-8bit font-bold text-xl px-10 py-5"
        >Search</NuxtLink
      >
    </div>
    <div
      class="w-250 bg-gray-500 justify-center shadow-2xl shadow-inherit m-2 max-h-full px-10 py-10 mt-20 bg-opacity-80"
    >
      <slot />
    </div>
  </div>
</template>

<script></script>
