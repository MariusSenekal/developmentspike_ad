// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4,
  },
  
  modules: ['vuetify-nuxt-module'],
  
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        viewportSize: true,
      },
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              primary: '#00D9FF',
              secondary: '#7B2CBF',
              accent: '#FF006E',
              background: '#0A0E27',
              surface: '#1A1F3A',
              'surface-variant': '#2A2F4A',
            },
          },
        },
      },
    },
  },
  
  css: [
    '@mdi/font/css/materialdesignicons.css',
  ],
})
