<template>
    <div class="b-trade-cart">
        <h2>
            Вы получите
        </h2>
        <div class="b-trade-inventory">
            <bTradeCartItem
            v-for="item in CART()"
            :key="item.id_steam"
            v-bind:item="item"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import bTradeCartItem from './b-drade-cart-item.vue'

export default {
    name: 'b-trade-cart',
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapGetters([
            'CART'
        ])
    },
    components: {
        bTradeCartItem
    }
}
</script>

<style lang="scss">

</style>