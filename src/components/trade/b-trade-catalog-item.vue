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
        class="standart-btn"
        v-if="count == 0"
        @click="addToCart">
            <p>
                Обмен
            </p>
        </a>
        <a
        class="standart-btn"
        v-if="count != 0 && item.type == 'veapone'"
        @click="deleteFromCart">
            <p>
                Вернуть
            </p>
        </a>
        <div v-if="count !=0 && count < item.count  && item.type == 'case'" class="multu-сhoice">
            <a @click="deleteFromCart">
                <p>
                    --
                </p>
            </a>
            <span>
                <p> {{ count }}</p>
            </span>
            <a @click="addToCart">
                <p>
                    +
                </p>
            </a>
        </div>
        <div v-if="count == item.count && item.type == 'case'" class="multu-сhoice">
            <a @click="deleteFromCart">
                <p>
                    --
                </p>
            </a>
            <span>
                <p> {{ count }}</p>
            </span>
            <a class="disablend">
                <p>
                    +
                </p>
            </a>
        </div>
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

<style lang="scss" scoped>
.multu-сhoice{
    display: flex;
    justify-content: space-between;
}

.multu-сhoice a p {
    width: 22px;
    padding: auto; 
}
.multu-сhoice p {
    margin: $margin $margin * 1.5;
}

.multu-сhoice .disablend p {
    background-color: $main-bg-inventory;
}

.b-trade-catalog-item:hover .multu-сhoice .disablend p {
    background-color: $main-bg-inventory;
    cursor: not-allowed;
}
</style>