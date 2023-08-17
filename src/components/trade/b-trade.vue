<template>
    <div class="b-trade">
        <bTradeCart/>
        <div>
            <bTradeBtn/>
            <bTradeFilters/>
        </div>
        <bCatalog/>
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
        return {}
    },
    components: {
        bTradeCart,
        bTradeBtn,
        bTradeFilters,
        bCatalog
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