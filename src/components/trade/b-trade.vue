<script setup>
import {ref} from "vue";
import bTradeCart from './b-trade-cart.vue'
import bTradeBtn from './b-trade-btn.vue'
import bTradeFilters from './b-trade-filters.vue'
import bTradeCatalog from './b-trade-catalog.vue'

let selectedType = ref('ALL')

const itemType = ref([{name: 'Все', value: 'ALL'}, {name: 'Кейсы', value: 'case'}, {name: 'Оружие', value: 'weapon'}])

let changeOptions = (type) => {
  selectedType.value = type
}

</script>

<template>
  <div class="b-trade">
    <bTradeCart/>
    <div>
      <bTradeBtn/>
      <bTradeFilters
          :itemType="itemType"
          :selectedType="selectedType"
          @changeOptions="changeOptions"
      />
    </div>
    <bTradeCatalog
        :selectedType="selectedType"
    />
  </div>
</template>


<style lang="scss">
.b-trade {
  display: flex;
  justify-content: space-between;
  width: $b-container-width;
  margin-top: $margin-top;
}
</style>