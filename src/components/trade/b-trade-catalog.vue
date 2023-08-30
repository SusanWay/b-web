<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import {useInventoryStore} from "@/stores/inventoryStore"
import {useCartStore} from "@/stores/cartStore"
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
      return ''
    }
  }
})

let sortedItems = ref([] as Item[])

const filteredItems = computed(() => {
  if (props.selectedType !== 'ALL') {
    sortItemsByType()
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

const sortItemsByType = () => {
  sortedItems.value = []
  for (const item of inventoryStore.GET_ITEMS) {
    if (props.selectedType === item.type) {
      sortedItems.value.push(item)
    }
  }
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