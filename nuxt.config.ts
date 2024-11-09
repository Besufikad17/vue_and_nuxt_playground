// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  content: {
    highlight: {
      theme: {
        default: "one-dark-pro",
        dark: "github-dark",
      },
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss"
  ],
})
