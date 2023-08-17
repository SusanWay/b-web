<template>
    <div class="b-catalog">
        <h1 class="b-h1">Список аккаунтов</h1>
        <div v-if="products != []" class="b-catalog__header">
            <div class="b-catalog__header__items">
                <p>Логин</p>
                <p>Последняя активность</p>
                <p>Информация</p>
                <p>Удалить</p>
            </div>
        </div>
        <div class="b-catalog__items">
            <bCatalogItem
            v-for="account in this.$store.state.accounts"
            :key="account.id"
            v-bind:acc_data="account"
        />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import bCatalogItem from './b-catalog-item.vue';

export default {
    name: 'b-catalog',
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapActions([
            'GET_ACCOUNTS_FROM_API'
        ])
    },
    mounted()   {
        this.GET_ACCOUNTS_FROM_API()
    },
    components: {
        bCatalogItem
    }
}
</script>

<style lang="scss">
    .b-catalog{
        width: $b-container-width;
        margin-top: $margin-top;
        background-color: $main-bg-light;
        padding: 30px;
        border-radius: 15px;
    }

    .b-catalog__items{
        display: flex;
        flex-direction: column;
    }

    .b-catalog__header__items{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: $b-li-border-bottom;
    }

    .b-catalog__header__items p{
        width: $b-item-width;
    }

    .b-h1{
        text-align: center;
    }
</style>