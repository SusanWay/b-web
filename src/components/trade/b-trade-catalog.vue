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
    props:{},
    data(){
        return {}
    },
    components: {
        bTradeCatalogItem
    },
    methods: {
        ...mapActions([
            'GET_ITEMS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        }
    },
    mounted(){
        this.GET_ITEMS_FROM_API()
    }
}
</script>

<style lang="scss">

    .b-trade-catalog{
        width: $b-trade-case-widht;
        height: 700px;
        padding: $b-account-case-padding;
        border-radius: $b-account-case-border-radius;
        background-color: $main-bg-light;
    }

    .b-trade-inventory{
        display: flex;
        flex-wrap: wrap;
        background-color: $main-bg-inventory;
        height: 580px;
        padding: 20px;
        overflow: auto;
    }

    .b-trade-inventory::-webkit-scrollbar
    {
        width: 6px;
        background-color: #f5f5f500;
    }

    .b-trade-inventory::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #555;
    }
</style>