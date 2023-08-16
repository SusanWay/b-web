<template>
    <div class="b-catalog-item">
        <p class="b-catalog-item_element" >{{ acc_data.name }}</p>
        <p class="b-catalog-item_element" >{{ acc_data.last_activity }}</p>
        <router-link class="b-catalog-item_element_btn" :to="`/accaunts/${acc_data.id}/${acc_data.id_inventory}`">
            <p>
                Подробнее
            </p>
        </router-link>
        <a class="b-catalog-item_element_btn" href="#home"><p>Обмен</p></a>
    </div>
</template>

<script>

export default {
    name: 'b-catalog-item',
    props: {
        acc_data: {
            type: Object,
            defoult() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        
    }
}

</script>

<style lang="scss">
    .b-catalog-item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid black;
        padding: 20px 0px 20px 0px;
    }

    .b-catalog-item_element, .b-catalog-item_element_btn {
        width: $b-item-width;
    }

    .b-catalog-item_element_btn{
        color: #212121;
        text-decoration: none;
        text-align: center;
        border: $b-li-border-bottom;
        border-radius: 4px;
        margin: 16px 0px 16px 0px;
        background-color: $main-bg-hover;
    }
</style>