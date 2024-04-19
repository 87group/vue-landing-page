// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vant/nuxt'],
  app: {
    head: {
      title:'87poker',
      link: [
        { rel: 'icon', type: 'image/png', href: '/title.png' },
      ],
    }
  }
})
