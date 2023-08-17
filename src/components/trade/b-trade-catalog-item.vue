<template>
    <div class="b-trade-catalog-item">
        <img :src="item.img" alt="">
        <div class="b-trade-catalog-item_info">
            <span v-if="item.type == 'case'">
                Кол-во: {{ item.count }}
            </span>
            <span v-if="item.type == 'veapone'">
                {{ item.float }}
            </span>
        </div>
        <div class="b-trade-catalog-item_price">
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
        name: 'b-trade-catalog-item',
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

<style lang="scss">

</style>