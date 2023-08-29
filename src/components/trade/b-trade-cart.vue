<script setup lang="ts">
import {useCartStore} from "@/stores/cartStore"
import bItem from '../ui-components/b-item.vue'

const cartStore = useCartStore()
</script>

<template>
  <div class="b-trade-cart">
    <h2>
      Вы получите
    </h2>
    <div class="b-trade-inventory">
      <bItem
          v-for="item of cartStore.GET_CART_ITEMS "
          :key="item.idSteam"
          v-bind:item="item"
      />
    </div>
  </div>
</template>


<style lang="scss">

</style>