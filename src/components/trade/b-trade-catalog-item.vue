<template>
    <div class="b-trade-catalog-item">
        <img :src="item.img" alt="">
        <div class="b-trade-catalog-item_info">
            <span v-if="item.type == 'case'">
                Кол-во: {{ item.count }}
            </span>
            <span v-if="item.type == 'weapon'">
                {{ item.float }}
            </span>
        </div>
        <div class="b-trade-catalog-item_price">
            <span> 
                {{ item.cost }} ₽
            </span>
        </div>
        <a class="standart-btn" v-if="itemCount === 0" @click="addToCart">
            <p>Обмен</p>
        </a>
        <a class="standart-btn" v-else-if="itemCount !== 0 && item.type === 'weapon'" @click="deleteFromCart">
            <p>Вернуть</p>
        </a>
        <div v-else-if="itemCount === item.count && item.type === 'case'" class="multu-сhoice">
            <a @click="deleteFromCart">
                <p>
                    --
                </p>
            </a>
            <span>
                <p> {{ itemCount }}</p>
            </span>
            <a class="disablend">
                <p>
                    +
                </p>
            </a>
        </div>
        <div v-else-if="itemCount !== 0 && item.type === 'case'" class="multu-сhoice">
            <a @click="deleteFromCart">
                <p>--</p>
            </a>
            <span>
                <p> {{ itemCount }} </p>
            </span>
            <a @click="addToCart">
                <p>
                    +
                </p>
            </a>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default{
        name: 'b-trade-catalog-item',
        props:{
            item: {
              type: Object,
              default() {
                return {}
              }
            }
        },
        data(){
            return {
              count: 0
            }
        },
        methods: {
            addToCart(){
                this.$emit('addToCart', this.item)
            },
            deleteFromCart(){
                this.$emit('deleteFromCart', this.item)
            },
          ...mapGetters([
              'ITEMS',
              "CART",
              'QUANTITY_ITEM'
          ])
        },
      computed: {
          itemCount(){
            if(!this.ITEMS().length){
              return 0
            }
            const existingItemIndex = this.CART().findIndex(cartItem => cartItem.id_steam === this.item.id_steam);

            if (existingItemIndex !== -1) {
              console.log(2, this.CART()[existingItemIndex].quantity, this.CART())
              return this.CART()[existingItemIndex].quantity
            }
            console.log(3)
            return 0
          }
      }
    }
</script>

<style lang="scss">
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