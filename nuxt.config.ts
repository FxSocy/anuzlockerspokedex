// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt", "@nuxt/image"],
  experimental: {
    viewTransition: false,
  },
  devtools: {
    enabled: true,
  },
  css: ["~/layouts/global.css"],
});
