<script setup lang="ts">

const props = defineProps({
  msg: {
    type: String,
    default: () => ''
  }

})

</script>

<template>
  <div class="b-trade-cart">
    <h2>{{props.msg}}</h2>
    <div class="b-trade-inventory">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">

</style>