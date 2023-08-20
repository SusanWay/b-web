<script setup>
import {useStore} from 'vuex';
import bTradeCartItem from './b-trade-cart-item.vue'

const store = useStore()

</script>

<template>
  <div class="b-trade-cart">
    <h2>
      Вы получите
    </h2>
    <div class="b-trade-inventory">
      <bTradeCartItem
          v-for="item in store.getters.CART"
          :key="item.id_steam"
          v-bind:item="item"
      />
    </div>
  </div>
</template>


<style lang="scss">

</style>