<template>
    <div class="b-catalog-item">
        <p class="b-catalog-item_element" >{{ acc_data.name }}</p>
        <p class="b-catalog-item_element" >{{ acc_data.last_activity }}</p>
        <router-link class="b-catalog-item_element_btn" :to="`/accaunts/${acc_data.id}/${acc_data.id_inventory}`">
            <p>
                Подробнее
            </p>
        </router-link>
        <a class="b-catalog-item_element_btn" href="#home"><p>Удалить</p></a>
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
        padding: 20px 0px 20px 0px;
    }

    .b-catalog-item_element_btn{
        border-radius: 4px;
        margin: 16px 0px 16px 0px;
        border: $b-li-border-bottom;
        background-color: $main-bg-hover;
    }
</style>