<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="less">
#app {
  font-family: 'Heebo';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100vw;
  height: 100vh;
  overflow:hidden; 
}
* {
  margin:0;
  padding:0;
}
a { text-decoration: none}
a:link{color:#000000}
html { font-size: 62.5%; }
body { font-size: 1.4rem; }
</style>
