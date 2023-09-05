<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import {useInventoryStore} from "@/stores/inventoryStore"
import {useCartStore} from "@/stores/cartStore"
import {sortItemsByType} from "@/utils/Filters/sortItemsByType.ts";
import Item from "@/interfaces/itemInterface"
import bItem from '../ui-components/b-item.vue'
import bBtnCart from '../ui-components/b-btn-cart.vue'
import bItemPlace from '../ui-components/b-item-place.vue'

const inventoryStore = useInventoryStore()
const cartStore = useCartStore()


const props = defineProps({
  selectedType: {
    type: String,
    default() {
      return 'ALL'
    }
  }
})


const filteredItems = computed(() => {
  let sortedItems = ref([] as Item[])
  if (props.selectedType !== 'ALL') {
    sortedItems.value = sortItemsByType(inventoryStore.GET_ITEMS, <string>props.selectedType)
    return sortedItems.value
  }
  return inventoryStore.GET_ITEMS
})

const addToCart = (data: Item) => {
  cartStore.ADD_TO_CART(data)
}

const deleteFromCart = (data: Item) => {
  cartStore.DELETE_FROM_CART(data)
}

onMounted(() => {
  inventoryStore.GET_ITEMS_FROM_API()
})

</script>

<template>
  <div class="b-trade-catalog">
    <bItemPlace msg="Предметы доступные для обмена">
      <bItem
          v-for="item in filteredItems"
          :key="item.idSteam"
          :item="item">
        <bBtnCart
            :key="item.idSteam"
            :item="item"
            @deleteFromCart="deleteFromCart"
            @addToCart="addToCart"
        />
      </bItem>
    </bItemPlace>
  </div>
</template>

<style lang="scss">
</style>