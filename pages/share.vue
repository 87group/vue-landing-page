<template>
    <div>
      <div>
        <img :src="imageUrl">
      </div>
      <div>{{ title }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "加入并与扑克爱好者对战！",
        imageUrl: "./img/share.png"
      };
    },
    async created() {
      await this.redirect();
    },
    methods: {
      async redirect() {
        const query = this.$route.query;
        if (query) {
          const url = query.url;
          const width = query.width;
          const height = query.height;
          if (url) this.imageUrl = atob(url);
          if (width) this.imageWidth = parseInt(width);
          if (height) this.imageHeight = parseInt(height);
        }
        await this.$router.push({
          path: "/",
          query: this.$route.query
        });
      }
    }
  };
  </script>
  
  <style>
  /* 在这里添加样式 */
  </style>
  