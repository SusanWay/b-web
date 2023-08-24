<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import BTradeCatalogItem from "./b-trade-catalog-item.vue"


const store = useStore()

const props = defineProps({
  selectedType: {
    type: String,
    default() {
      return ''
    }
  }
})

let sortedItems = ref([])

const filteredItems = computed(() => {
  if (props.selectedType !== 'ALL') {
    sortItemsByType()
    return sortedItems.value
  }
  return store.getters.ITEMS
})

const addToCart = (data) => {
  store.dispatch('ADD_TO_CART', data)
}

const deleteFromCart = (data) => {
  store.dispatch('DELETE_FROM_CART', data)
}

const sortItemsByType = () => {
  sortedItems.value = []
  for (const item of store.getters.ITEMS) {
    if (props.selectedType === item.type) {
      sortedItems.value.push(item)
    }
  }
}

onMounted(() => {
  store.dispatch('GET_ITEMS_FROM_API')
})

</script>

<template>
  <div class="b-trade-catalog">
    <h2>
      Предметы доступные для обмена
    </h2>
    <div class="b-trade-inventory">
      <bTradeCatalogItem
          v-for="item in filteredItems"
          :key="item.id_steam"
          :item="item"
          @deleteFromCart="deleteFromCart"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<style lang="scss">
</style>