import { Static } from "nuxt/dist/app/compat/capi";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  target: "static",
});
