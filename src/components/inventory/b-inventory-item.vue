<template>
    <div class="b-inventory-item">
        <img :src="item.img" alt="">
        <div class="b-inventory-item_info">
            <span v-if="item.type == 'case'">
                Кол-во: {{ item.count }}
            </span>
            <span v-if="item.type == 'veapone'">
                {{ item.float }}
            </span>
        </div>
        <div class="b-inventory-item_price">
            <span> 
            {{ item.price }} ₽
        </span>
        </div>
        <a href="#">
            <p>
                market
            </p>
        </a>
    </div>
</template>

<script>
    export default{
        name: 'b-inventory-item',
        props:{
            item: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {}
        },
        components:{}
    }
</script>

<style lang="scss" scoped>

    .b-inventory-item{
        height: 210px;
        width: 210px;
        margin: 0 10px;
    }
    .b-inventory-item img{
        width: 200px;
    }
</style>