<template>
    <div class="b-catalog-item">
        <p class="b-catalog-item_element" >{{ acc_data.name }}</p>
        <p v-if="acc_data.available == true" class="b-catalog-item_element">Предмет выпал</p>
        <p class="b-catalog-item_element" >{{ acc_data.time }}</p>
        <a class="b-catalog-item_element_btn" href="#home"><p>Подробнее</p></a>
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
        return {
            timeToDropItem: 12,
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
    computed() {

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
        width: 100px;
    }

    .b-catalog-item_element_btn{
        color: #212121;
        text-decoration: none;
        text-align: center;
        border: 1px solid black;
        border-radius: 4px;
        margin: 16px 0px 16px 0px;
    }

    .b-catalog-item_element_btn:hover {
        background-color: $main-bg;
    }
</style>