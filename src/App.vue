<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/info">Info</router-link> |
      <router-link to="/work">Work</router-link> |
      <router-link to="/production">Production</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less" >
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // font-size: 14px;
  padding: 0 10px;
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .container {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
