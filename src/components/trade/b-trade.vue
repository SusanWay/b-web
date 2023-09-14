<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useAccountStore} from "@/stores/accountStore.ts"
import bTradeCart from './b-trade-cart.vue'
import bTradeBtn from './b-trade-btn.vue'
import bTradeFilters from './b-trade-filters.vue'
import bTradeCatalog from './b-trade-catalog.vue'
import bAccSelectPlace from '../ui-components/b-acc-selecect-place.vue'

const accountStore = useAccountStore()

const selectedType = ref('ALL')
const itemType = ref([{name: 'Все', value: 'ALL'}, {name: 'Кейсы', value: 'case'}, {name: 'Оружие', value: 'weapon'}])

const changeOptions = (type:string) => {
  selectedType.value = type
}

onMounted(() => {
  accountStore.GET_ACCOUNTS_FROM_API()
})

</script>

<template>
  <div class="b-trade">
    <div>
      <bAccSelectPlace
          msg="Выберите аккаунт для передачи предметов"
          :accounts="accountStore.GET_ACCOUNTS_FOR_FILTER"
      />
      <bTradeCart/>
    </div>
    <div>
      <bTradeBtn/>
      <bTradeFilters
          :itemType="itemType"
          :selectedType="selectedType"
          @changeOptions="changeOptions"
      />
    </div>
    <div>
      <bAccSelectPlace
          msg="Выберите аккаунт для передачи предметов"
      />
      <bTradeCatalog
          :selectedType="selectedType"
      />
    </div>
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