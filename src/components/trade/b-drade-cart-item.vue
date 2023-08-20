<template>
    <div class="b-trade-cart-item">
        <img :src="item.img" alt="">
        <div class="b-trade-cart-item_info">
            <span>
                <p>
                    {{ item.name }}
                </p>
            </span>
            <span v-if="item.type == 'case'">
                <p>
                    Кол-во: {{ item.quantity }}
                </p>
            </span>
            <span v-if="item.type == 'veapone'">
                <p>
                    {{ item.float }}
                </p>
            </span>
        </div>
        <div class="b-trade-cart-item_price">
            <span>
                <p>
                    {{ item.cost }} ₽
                </p>
            </span>
        </div>
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
        methods: {
            addToCart(){
                this.$emit('addToCart', this.item)
            }
        }
    }
</script>

<style lang="scss" scoped>  

</style>