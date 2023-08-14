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
            v-for="product in products"
            :key="product.article"
            v-bind:acc_data="product"
        />
        </div>
    </div>
</template>

<script>
import bCatalogItem from './b-catalog-item.vue';
export default {
    name: 'b-catalog',
    props: {},
    data() {
        return {
            products: [
                {
                image: "1.jpg",
                name: "T-shirt 1",
                time: '2023-08-02T09:00:00.594Z',
                article: "T1",
                available: true,
                category: "Мужские"
                },
                {
                image: "2.jpg",
                name: "T-shirt 2",
                time: '2022-10-31T09:00:00.594Z',
                article: "T2",
                available: true,
                category: "Женские"
                }
            ]
        }
    },
    computed: {},
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