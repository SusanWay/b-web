<template>
    <div class="b-catalog">
        <h1>Список аккаунтов</h1>
        <div v-if="products != []" class="b-catalog__header">
            <div class="b-catalog__header__items">
                <p>Login</p>
                <p>Предметов в инвентаре</p>
                <p>Следущий через</p>
                <p>Действия</p>
            </div>
        </div>
        <div class="b-catalog__items">
            <bCatalogItem
            v-for="product in this.$store.state.products"
            :key="product.article"
            v-bind:acc_data="product"
        />
        </div>
    </div>
</template>

<script>
import bCatalogItem from './b-catalog-item.vue';
import { mapActions } from 'vuex';

export default {
    name: 'b-catalog',
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapActions([
            'GET_PTODUCT_FROM_API'
        ])
    },
    mounted() {
        this.GET_PTODUCT_FROM_API()
    },
    components: {
        bCatalogItem
    }
}
</script>

<style>
    .b-catalog{
        width: 100%;
    }

    .b-catalog__items{
        display: flex;
        flex-direction: column;
    }

    .b-catalog__header__items{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid black;
    }

    .b-catalog__header__items p{
        width: 100px;
    }
</style>