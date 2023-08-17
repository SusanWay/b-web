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
        <a
        v-if="count == 0"
        @click="addToCart">
            <p>
                Обмен
            </p>
        </a>
        <a
        v-if="count != 0"
        @click="deleteFromCart">
            <p>
                Вернуть
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
            return {
                count: 0
                }
        },
        components:{},
        methods: {
            addToCart(){
                this.$emit('addToCart', this.item)
                this.count++
            },
            deleteFromCart(){
                this.$emit('deleteFromCart', this.item)
                this.count--
            }
        }
    }
</script>

<style lang="scss">

</style>