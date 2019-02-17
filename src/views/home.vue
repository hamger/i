<template>
  <div class="container">
    <div class="title">
      <img :src="$options.title.url">
      <h1>{{ $options.title.name }}</h1>
      <h2>{{ $options.title.description }}</h2>
    </div>
    <Card title="Contact" :list="$options.contact"></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "home",
  components: {
    Card
  },
  title: {
    name: "孟汉光",
    url: "./q-avatar.jpeg",
    description: '"Welcome to my resume."'
  },
  contact: [
    { name: " 邮箱: 2313303800@qq.com", icon: "icon-envelope" },
    { name: " 手机: 15958023204", icon: "icon-phone" },
    { name: " 微信: mhg23133", icon: "icon-comments" },
  ],
};
</script>

<style scoped lang="less">
.container {
  .title {
    margin-bottom: 50px;
    img {
      border-radius: 50%;
      display: block;
      margin: 0 auto;
      width: 150px;
    }
    h1 {
      margin: 30px 0;
    }
  }
}
</style>

