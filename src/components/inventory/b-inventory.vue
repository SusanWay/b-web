<script setup lang="ts">
import bItem from '../ui-components/b-item.vue'
import bBtn from '../ui-components/b-btn.vue'
import {useInventoryStore} from "@/stores/inventoryStore"

const inventoryStore = useInventoryStore()
</script>

<template>
  <div class="b-inventory">
    <bItem
        v-for="item of inventoryStore.GET_INVENTORY_CURRENT_ITEMS"
        :key="item.idSteam"
        v-bind:item="item">
      <bBtn></bBtn>
      </bItem>
  </div>
</template>


<style lang="scss">
.b-inventory {
  height: 340px;
  padding: 20px;
}
</style>