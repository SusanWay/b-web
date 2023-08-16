<template>
  <div id="app">
    <bHeader/>
    <bMainWrapper/>
  </div>
</template>

<script>
import bMainWrapper from './components/b-main-wrapper.vue';
import bHeader from './components/layouts/b-header.vue'

export default {
  name: 'App',
  components: {
    bMainWrapper,
    bHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
*{
  color: black;
}
</style>
  