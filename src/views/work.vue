<template>
  <div class="container">
    <div class="wrap" v-for="(item, index) in $options.experience" :key="index">
      <h3>{{item.company.split('&')[0]}} <br>{{item.company.split('&')[1]}}</h3>
      <Project v-for="(item2, index2) in item.exp" :key="index2" :data="item2"></Project>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
export default {
  name: "work",
  components: { 
    Project
  },
  experience: [
    {
      company: "杭州一骑轻尘信息技术有限公司&（2018.5 - 至今）",
      exp: [
        {
          name: "车辆中心",
          description: [
            "vue + element-ui，关于车辆状态的后台管理系统，旨在帮助业务人员更快捷的获取和管理车辆信息。"
          ]
        },
        {
          name: "内网监控门户",
          description: [
            "node.js + express + ejs + mysql，为运维人员服务的一个信息门户，对监控网址进行增删改管理。"
          ]
        },
        {
          name: "四周年直播",
          description: [
            "express + vue + mysql，卖好车四周年的活动页面。"
          ]
        }
      ]
    },
    {
      company: "浙江核新同花顺网络信息股份有限公司&（2017.4 - 2018.5）",
      exp: [
        {
          name: "组合广场",
          description: [
            "独立开发佣金宝（国金证券客户端）的组合广场四期，采用 vue + sass 编写，主要是对投顾组合的数据进行展示。",
            "在这个项目中使用了自己的插件-日期选择器和地区选择器。"
          ]
        },
        {
          name: "数据中心",
          description: [
            "Vue + sass + ECharts，独立开发数据中心14个模块的数据展示与交互，并从中抽离出一些实用的 Vue 组件。"
          ]
        },
        {
          name: "模拟炒股",
          description: [
            "接手佣金宝模拟炒股的二期，使用 jquery 编写的传统项目，主要开发个人主页、调仓、炒股大赛等部分。",
            "封装了很多复用函数，并删除了大量冗余代码。在开发调试、函数封装、文件命名上进行了项目优化。"
          ]
        },
        {
          name: "消息推送",
          description: [
            "jQuery + ECharts，参与 cbas2.0 （用户行为分析系统）的前端开发工作，主要负责开发其中的消息推送模块。"
          ]
        }
      ]
    },
    {
      company: "杭州巨盘科技有限公司&（2016.12 - 2017.3）",
      exp: [
        {
          name: "一米发域名交易平台",
          description: [
            "jQuery + Bootstrap，参与一米发域名交易的平台项目，开发域名拍卖和一口价交易页面，以及发布域名资讯的功能。"
          ]
        }
      ]
    }
  ]
};
</script>

<style scoped lang="less">
.container {
  .wrap {
    margin-top: 30px;
  }
  .wrap:first-child {
    margin-top: 0px;
  }
}
</style>


