// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-windicss',
  ],
  windicss: {
    analyze: true
  },
  runtimeConfig:{
    public:{
      apiBaseUrl:'',
    },
    apiKey:''
  }
})
