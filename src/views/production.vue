<template>
  <div class="container">
    <Project v-for="(item2, index2) in $options.production" :key="index2" :data="item2"></Project>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";
export default {
  name: "production",
  components: {
    Project
  },
  production: [
    {
      name: "vue-immutable",
      link: [
        {
          url: "https://github.com/hamger/vue-immutable",
          name: "源码"
        },
        {
          url: "https://hamger.github.io/vue-immutable/",
          name: "文档"
        }
      ],
      description: [
        "vue-immutable 是一个 vue 插件，优化 vue 对 immutable 数据的处理，减少不必要的数据观察。"
      ]
    },
    {
      name: "cvs",
      link: [
        {
          url: "https://github.com/hamger/cvs",
          name: "源码"
        },
        {
          url: "https://hamger.github.io/cvs/",
          name: "文档"
        }
      ],
      description: [
        "cvs 是一个基于 canvas 的 2D 基础绘图框架，旨在使 canvas绘图更加简单。API 设计秉承极简的原则，学习成本低；将 canvas 绘图改写为面向对象编程；支持高度自由的自定义元素，应用灵活；元素支持基础事件绑定，使画布具有更多的交互功能；基于离屏渲染的缓存机制，使动画绘制更加流畅；基于时间轴的细粒度动画控制。"
      ]
    },
    {
      name: "Seed",
      link: [
        {
          url: "https://github.com/hamger/Seed",
          name: "源码&文档"
        }
      ],
      description: [
        "一个仿 Vue 的前端 mvc 基础框架，基于 data-dirver 和 hg-virtual-dom ， 使用 jsx 作为模板引擎。"
      ]
    },
    {
      name: "word-counter",
      link: [
        {
          url: "https://github.com/hamger/word-counter",
          name: "源码&文档"
        }
      ],
      description: [
        "一个用来统计英文原著中单词出现概率的工具，使用 python 编写，支持批量单词过滤、通过爬虫实现的快速查词。"
      ]
    },
    {
      name: "data-dirver",
      link: [
        {
          url: "https://github.com/hamger/data-dirver",
          name: "源码"
        },
        {
          url: "https://hamger.github.io/data-dirver/",
          name: "文档"
        }
      ],
      description: [
        "实现 JavaScript 数据响应的解决方案。基于 Object.defineProperties ，使用 TypeScript 编写。只暴露了三个函数，其中 observe 和 Watcher 用于监听单一数据，使用 DD 构造器可以体现数据间的父子关系，便于实现复杂情况下的数据响应。"
      ]
    },
    {
      name: "hg-virtual-dom",
      link: [
        {
          url: "https://github.com/hamger/hg-virtual-dom",
          name: "源码&文档"
        }
      ],
      description: [
        "减少手动 DOM 操作的解决方案。整个库只暴露了四个方法，非常简单易用，且提供中英双文档。",
        "使用 jasmine 进行单元测试，且覆盖率达到百分之百。"
      ]
    },
    {
      name: "hg-jslibrary",
      link: [
        {
          url: "https://github.com/hamger/hg-jslibrary",
          name: "源码"
        },
        {
          url: "https://hamger.github.io/hg-jslibrary/",
          name: "文档"
        }
      ],
      description: [
        "JavaScript 函数库，收纳了许多非常实用的函数，比如对象数组排序、日期格式化、对象深克隆、路由信息解析等。"
      ]
    },
    {
      name: "werewolfkill-recorder",
      link: [
        {
          url: "https://github.com/hamger/werewolfkill-recorder",
          name: "源码"
        },
        {
          url: "https://hamger.github.io/werewolfkill-recorder/#/",
          name: "Demo"
        }
      ],
      description: [
        "使用 react 写的一个狼人杀记录器，主要使面杀时记录票型更加便利。"
      ]
    },
    {
      name: "annotate-webpack-plugin",
      link: [
        {
          url: "https://github.com/hamger/annotate-webpack-plugin",
          name: "源码&文档"
        }
      ],
      description: [
        "一个用于添加文档注释的 webpack 插件。提供中英双文档，该插件只接受两个配置参数，使用十分简单。"
      ]
    },
    {
      names: [
        {
          name: "mhg-cli",
          link: [
            {
              url: "https://github.com/hamger/mhg-cli",
              name: "源码"
            }
          ]
        },
        {
          name: "mhg-templates",
          link: [
            {
              url: "https://github.com/hamger/mhg-templates",
              name: "源码"
            }
          ]
        }
      ],
      description: [
        "mhg-cli 是一个用于快速创建项目模板的脚手架。结合 mhg-templates 现阶段提供的 6 套模板，帮助提高项目搭建效率。"
      ]
    },
    {
      names: [
        {
          name: "hg-citypicker",
          link: [
            {
              url: "https://github.com/hamger/hg-citypicker",
              name: "源码&文档"
            }
          ]
        },
        {
          name: "hg-datepicker",
          link: [
            {
              url: "https://github.com/hamger/hg-datepicker",
              name: "源码&文档"
            }
          ]
        },
        {
          name: "hg-parapicker",
          link: [
            {
              url: "https://github.com/hamger/hg-parapicker",
              name: "源码&文档"
            }
          ]
        }
      ],
      description: [
        "移动端的地区选择器、日期选择器、并列选择器。hg-citypicker 适用于嵌套关系数据的选择，支持多级联动，已在线上项目中使用。hg-datapicker 适用于日期的选择，支持三种类型的日期选择，已在线上项目中使用。hg-parapicker 适用于并列关系数据的选择。以上三者均支持滑动惯性和选择器样式的配置。"
      ]
    },
    {
      name: "hg-vcomponents",
      link: [
        {
          url: "https://github.com/hamger/hg-vcomponents",
          name: "源码&Demo"
        }
      ],
      description: [
        "从实际项目中提炼出一些常用的组件并形成自己的 Vue 组件库。",
        "现阶段包括左滑删除组件、表头固定组件、页面顶置组件、多项文本输入组件、空心和实心箭头组件等12个组件。"
      ]
    },
    {
      name: "hg-resume",
      link: [
        {
          url: "https://github.com/hamger/hg-resume",
          name: "源码&Demo"
        }
      ],
      description: [
        "创建了一个适用于程序员的PDF简历模板，用于快速搭建漂亮的个人简历。"
      ]
    },
    {
      name: "memory-turnover",
      link: [
        {
          url: "https://github.com/hamger/memory-turnover",
          name: "源码&Demo"
        }
      ],
      description: [
        "个人创作的一款有趣的小游戏，锻炼记忆力的消消乐，设有多档难度选择，支持自定义图片。"
      ]
    }
  ]
};
</script>

<style scoped lang="less">
</style>


