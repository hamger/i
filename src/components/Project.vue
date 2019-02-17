<template>
  <div class="card">
    <h4 class="title">
      <template v-if="data.names">
        <span v-for="(item, idx) in data.names" :key="idx">
          {{ item.name }}
          <a v-for="(item2, index) in item.link" :key="index" :href="item2.url" target="_blank">
            <i class="icon-link"></i>
            {{ item2.name + " " }}
          </a>
        </span>
      </template>
      <span v-if="!data.names">
        {{ data.name }}
        <a v-for="(item2, index) in data.link" :key="index" :href="item2.url" target="_blank">
          <i class="icon-link"></i>
          {{ item2.name + " " }}
        </a>
      </span>
    </h4>
    <div class="description" v-for="(item, index) in data.description" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    data: Object
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
  padding: 5px;
  text-align: left;
  .title {
    margin: 0;
  }
}
</style>
