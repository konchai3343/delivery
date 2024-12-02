// https://nuxt.com/docs/api/configuration/nuxt-config
import Material from '@primevue/themes/material';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'online food delivery',
      meta: [
        // { name: 'description', content: 'My Nuxt 3 Application' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins',
        },
      ],
    },
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    'primeflex/themes/primeone-light.css', 
    // 'primeflex/themes/primeone-dark.css'  
  ],

  primevue: {
    options: {
      theme: {
        preset: Material
      },
      ripple: true,
    },
    
    
  }

})
