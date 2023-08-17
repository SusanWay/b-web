<template>
    <div class="b-trade-cart-item">
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
        <a @click="addToCart">
            <p>
                Обмен
            </p>
        </a>
    </div>
</template>

<script>
    export default{
        name: 'b-trade-cart-item',
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
        components:{},
        methods: {
            addToCart(){
                this.$emit('addToCart', this.item)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .b-trade-cart-item{
        height: 210px;
        width: 180px;
        margin: $margin;
        padding: 5px;
        background-color: $main-bg-inventory-btn;
        border-radius: 5px;
    }
    .b-trade-cart-item img{
        height: 120px;
        width: 170px;
    }

    span{
        font-family: Inter, system-ui;
    }
    .b-trade-cart-item span {
        font-size: $b-inventory-info-font-size;
        color: $b-inventory-info-color;
    }
    .b-trade-cart-item span {
        font-size: 13px;
    }

    .b-inventory-item_info, .b-inventory-item_price{
        margin-left: $margin * 1.5;
    }

    .b-trade-cart-item:hover{
        background-color: $main-bg-inventory-btn-hover;
    }

    .b-trade-cart-item a p{
        text-decoration: none;
        text-align: center;
        background-color: $main-bg-inventory-btn-hover;
        border-radius: 5px;
        font-size: 16px;
        margin: $margin $margin * 1.5;
        padding: $padding * 0.25;
    }

    .b-trade-cart-item:hover a p{
        background-color: $main-bg-hover;
    }

    .b-trade-cart-item a p:hover{
        background-color: #aba0e7;
    }

    .b-trade-catalog-item a{
        cursor: pointer;
    }
</style>