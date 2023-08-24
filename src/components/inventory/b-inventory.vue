<script setup lang="ts">
import bInventoryItem from './b-inventory-item.vue'
import {useStore} from "vuex";

const store = useStore()
</script>

<template>
  <div class="b-inventory">
    <bInventoryItem
        v-for="item in store.getters.CURRENT_INVENTORY.items"
        :key="item.id_steam"
        v-bind:item="item"
    />
  </div>
</template>


<style lang="scss">
.b-inventory {
  height: 340px;
  padding: 20px;
}
</style>