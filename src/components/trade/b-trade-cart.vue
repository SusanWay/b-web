<script setup lang="ts">
import {useCartStore} from "@/stores/cartStore"
import bItem from '../ui-components/b-item.vue'
import bItemPlace from '../ui-components/b-item-place.vue'

const cartStore = useCartStore()
</script>

<template>
  <bItemPlace msg="Вы получите">
    <bItem
        v-for="item of cartStore.GET_CART_ITEMS "
        :key="item.idSteam"
        v-bind:item="item"
    />
  </bItemPlace>
</template>

<style lang="scss">

</style>