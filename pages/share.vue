<template>
    <div>
      <div><img :src="imageSrc"></div>
      <div>{{ pageTitle }}</div>
    </div>
  </template>
  
  <script>
  export default {
    head() {
      return {
        title: "87Poker  Join and Battle Against Poker Lovers Now!",
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { property: "fb:app_id", content: "766142250183785" },
          { property: "og:type", content: "article" },
          {
            property: "og:title",
            content: "Join and Battle Against Poker Lovers Now!"
          },
          {
            property: "og:description",
            content:
              "Click to join Club？ Poker lovers are waiting for you to battle!87Poker is the world's largest club-based poker platform. Games like NLH, PLO, OFC and 6+ are readily available, so come and battle against a worldwide player pool and become a Global Tournament champion!"
          },
          { property: "og:ttl", content: "345600" },
          {
            property: "og:image",
            content: this.$route.query.url
              ? atob(this.$route.query.url)
              : "./img/share.png"
          },
          { property: "og:image:type", content: "image/png" },
          {
            property: "og:image:width",
            content: this.$route.query.width ? this.$route.query.width : "1070"
          },
          {
            property: "og:image:height",
            content: this.$route.query.height ? this.$route.query.height : "480"
          },
          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:title",
            content: "Join and Battle Against Poker Lovers Now!"
          },
          {
            name: "twitter:image:src",
            content: this.$route.query.url
              ? atob(this.$route.query.url)
              : "./img/share.png"
          }
        ]
      };
    },
    data() {
      return {
        pageTitle: "Join and Battle Against Poker Lovers Now!",
        imageSrc: ""
      };
    },
    mounted() {
      this.imageSrc = this.$route.query.url
        ? atob(this.$route.query.url)
        : "/share02.png";
        const newPath = {
            path: '/',
            query: this.$route.query // 将原页面的GET参数添加到新路径
        };
        // router.push(newPath);
        console.log(this.$route.query);
      setTimeout(() => {
        this.$router.push(newPath);
      }, 0);
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles here */
  </style>
  