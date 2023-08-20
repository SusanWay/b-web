<template>
    <div class="b-trade">
        <bTradeCart/>
        <div>
            <bTradeBtn/>
            <bTradeFilters
                :itemType="itemType"
                :selectedType="selectedType"
                @sortByType="sortByType"
            />
        </div>
        <bCatalog
        :selectedType="selectedType"
        />
    </div>
</template>

<script>
import bTradeCart from './b-trade-cart.vue'
import bTradeBtn from './b-trade-btn.vue'
import bTradeFilters from './b-trade-filters.vue'
import bCatalog from './b-trade-catalog.vue'

export default {
    name: 'b-trade',
    data() {
        return {
          itemType: [
            {name: 'Все', value: 'ALL'},
            {name: 'Кейсы', value: 'case'},
            {name: 'Оружие', value: 'weapon'}
          ],
          selectedType: 'ALL',
        }
    },
    components: {
        bTradeCart,
        bTradeBtn,
        bTradeFilters,
        bCatalog
    },
  methods: {
    sortByType(type){
      this.selectedType = type
    }
  }
}
</script>

<style lang="scss">
    .b-trade{
        display: flex;
        justify-content: space-between;
        width: $b-container-width;
        margin-top: $margin-top;
    }
</style>