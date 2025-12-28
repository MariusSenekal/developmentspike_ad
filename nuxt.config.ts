// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4,
  },
  
  app: {
    head: {
      title: 'Custom Web Development Solutions | Transform Your Ideas Into Digital Reality',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional custom web development services. From simple websites to complex applications - I build digital solutions that power your business.' },
        
        // Open Graph / Facebook / WhatsApp
        { property: 'fb:app_id', content: '966242223397117' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://developmentspike.co.za/' },
        { property: 'og:title', content: 'Transform Your Ideas Into Digital Reality - Development Spike' },
        { property: 'og:description', content: 'Custom Web Development Solutions. Professional web services from simple websites to complex applications that power your business.' },
        { property: 'og:image', content: 'https://developmentspike.co.za/og-image.png?v=20251228' },
        { property: 'og:image:secure_url', content: 'https://developmentspike.co.za/og-image.png?v=20251228' },
        { property: 'og:image:url', content: 'https://developmentspike.co.za/og-image.png?v=20251228' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Transform Your Ideas Into Digital Reality - Custom Web Development Solutions' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:site_name', content: 'Development Spike' },
        { property: 'og:locale', content: 'en_ZA' },
        { property: 'og:updated_time', content: new Date().toISOString() },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://developmentspike.co.za' },
        { name: 'twitter:title', content: 'Custom Web Development Solutions | Transform Your Ideas Into Digital Reality' },
        { name: 'twitter:description', content: 'Professional custom web development services. From simple websites to complex applications - I build digital solutions that power your business.' },
        { name: 'twitter:image', content: 'https://developmentspike.co.za/og-image.png?v=20251228' },
        { name: 'twitter:image:alt', content: 'Custom Web Development Solutions' },
        
        // Additional SEO
        { name: 'author', content: 'Development Spike' },
        { name: 'keywords', content: 'web development, custom websites, web applications, business solutions, digital transformation, professional web services' },
        { name: 'theme-color', content: '#0A0E27' },
      ],
      link: [
        { rel: 'canonical', href: 'https://developmentspike.co.za' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
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
