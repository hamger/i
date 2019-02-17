<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <template v-if="title !== 'Hobby'">
      <div class="list" v-for="(item, index) in list" :key="index">
        <i :class="item.icon"></i>
        {{ item.name }}
        <a v-if="item.url" :href="item.url" target="_blank">{{ item.url }}</a>
      </div>
    </template>
    <template v-if="title === 'Hobby'">
      <div class="box">
        <div v-for="(item, index) in list" :key="index">{{ item.name }}</div>
      </div>
    </template>
    <template v-if="title === 'Self-evaluation'">
      <div class="evaluation">
        <div v-for="(item, index) in list" :key="index">
          <span class="circle"></span>
          <span>{{ item }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    list: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  border: 1px solid #42b983;
  border-radius: 8px;
  position: relative;
  margin-bottom: 10px;
  padding: 5px 0;
  .title {
    color: #2c3e50;
    position: absolute;
    background-color: #fff;
    padding: 0 5px;
    top: -11px;
    left: 10px;
    z-index: 1;
  }
  .list {
    line-height: 36px;
  }
  .box {
    display: flex;
    div {
      line-height: 36px;
      flex: 1;
      img {
        color: green;
        overflow: hidden;
        width: 40px;
        height: 40px;
        transform: translateY(50px);
        filter: drop-shadow(#000 0 -50px);
      }
    }
  }
  .evaluation {
    padding: 10px;
    text-align: left;
    div {
      .circle {
        vertical-align: middle;
        display: inline-block;
        height: 12px;
        width: 12px;
        border-radius: 100%;
        margin-right: 5px;
        margin-bottom: 2px;
        background-color: rgb(44, 62, 80);
      }
    }
  }
}
</style>
