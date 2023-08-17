<template>
    <div class="b-trade-catalog">
        <h2>
            Предметы доступные для обмена
        </h2>
        <div class="b-trade-inventory">
            <bTradeCatalogItem
            v-for="item in this.$store.state.items"
            :key="item.id_steam"
            v-bind:item="item"
            @deleteFromCart="deleteFromCart"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import bTradeCatalogItem from './b-trade-catalog-item.vue'

export default{
    name: 'b-trade-catalog',
    data(){
        return {}
    },
    components: {
        bTradeCatalogItem
    },
    methods: {
        ...mapActions([
            'GET_ITEMS_FROM_API',
            'ADD_TO_CART',
            'DELETE_FROM_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        },
        deleteFromCart(data){
            this.DELETE_FROM_CART(data)
        }
    },
    mounted(){
        this.GET_ITEMS_FROM_API()
    }
}
</script>

<style lang="scss">
</style>