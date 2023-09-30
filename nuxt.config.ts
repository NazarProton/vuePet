// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: {
    enabled: false,

    timeline: {
      enabled: false,
    },
  },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
  quasar: {
    /* */
  },
});
