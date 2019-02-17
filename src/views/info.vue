<template>
  <div class="container">
    <Card title="Base" :list="$options.info"></Card>
    <Card title="Links" :list="$options.links"></Card>
    <Card title="Hobby" :list="$options.hobby"></Card>
    <Card title="Self-evaluation" :list="$options.evaluation"></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "info",
  components: {
    Card
  },
  info: [
    { name: " 年龄: 90 后", icon: "icon-user" },
    { name: " 本科: 中国计量大学", icon: "icon-book" },
    { name: " 籍贯: 浙江省诸暨市", icon: "icon-home" }
  ],
  links: [
    {
      name: " GitHub: ",
      url: "https://github.com/hamger",
      icon: "icon-github"
    },
    {
      name: " Blog: ",
      url: "https://hamger.github.io",
      icon: "icon-edit"
    }
  ],
  contact: [
    { name: " 邮箱: 2313303800@qq.com", icon: "icon-envelope" },
    { name: " 微信: mhg23133", icon: "icon-comments" },
    { name: " 手机: 15958023204", icon: "icon-phone" }
  ],
  application: "前端开发工程师",
  hobby: [
    { name: "户外运动", url: "./icon/outdoor.png" },
    { name: "乒乓球", url: "./icon/pingpong.png" },
    { name: "狼人杀", url: "./icon/werewolf.png" },
    { name: "造轮子", url: "./icon/wheel.png" }
  ],
  evaluation: [
    "在校时数学和物理成绩突出，具有较强的数理逻辑推导能力和模型抽象能力；",
    "大学担任过班长，勇于锻炼自己的组织协调能力和领导力；",
    "参加过演讲、主持、小品和相声，喜欢公众演讲；",
    "乐于学习新事物，愿意结识新朋友，易于沟通和相处；",
    "充满好奇心，勤于思考，愿意分享，享受 coding。"
  ]
};
</script>

<style scoped lang="less">
.container {
  .card {
    p {
    }
  }
  .evaluation {
    text-align: left;
  }
}
</style>


