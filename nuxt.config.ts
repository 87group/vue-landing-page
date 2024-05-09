// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@vant/nuxt'],
  app: {
    head: {
      title:'87poker',
      link: [
        { rel: 'icon', type: 'image/png', href: '/title.png' },
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Page description' },
        // 添加 Open Graph (OG) meta 标签
        { hid: 'og:title', property: 'og:title', content: "Play Poker With Global Users \n87 Poker is a professional and secure online Texas Hold'em poker platform that provides a wide range of game options and exciting tournament experiences for players who love Texas Hold'em poker." },
        { hid: 'og:site_name', property: 'og:site_name', content: '87 Poker' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.87poker.club' },
        { hid: 'og:description', property: 'og:description', content: "Play Poker With Global Users \n87 Poker is a professional and secure online Texas Hold'em poker platform that provides a wide range of game options and exciting tournament experiences for players who love Texas Hold'em poker." },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: '/share02.png' },
        { hid: 'og:locale', property: 'og:locale', content: 'en' }
      ],
    }
  }
})
