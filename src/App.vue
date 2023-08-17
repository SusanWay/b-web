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
</style>
  