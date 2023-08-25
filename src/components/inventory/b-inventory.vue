<script setup lang="ts">
import bInventoryItem from './b-inventory-item.vue'
import {useInventoryStore} from "@/stores/inventoryStore";

const inventoryStore = useInventoryStore()
</script>

<template>
  <div class="b-inventory">
    <bInventoryItem
        v-for="item of inventoryStore.GET_INVENTORY_CURRENT_ITEMS"
        :key="item.idSteam"
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