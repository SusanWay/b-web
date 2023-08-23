<script setup>
import {computed} from "vue"
import {useStore} from "vuex"

const store = useStore()

const props = defineProps({
  item: {
    type: Object, default() {
      return {}
    }
  }
})

const emits = defineEmits(['addToCart', 'deleteFromCart'])

const addToCart = () => {
  emits('addToCart', props.item)
}

const deleteFromCart = () => {
  emits('deleteFromCart', props.item)
}
const itemCount = computed(() => {
  const existingCartItemIndex = store.getters.CART.findIndex(cartItem => cartItem.id_steam === props.item.id_steam);

  if (existingCartItemIndex !== -1) {
    return store.getters.CART[existingCartItemIndex].quantity
  }
  return 0
})

</script>

<template>
  <div class="b-trade-catalog-item">
    <img :src="props.item.img" alt="">
    <div class="b-trade-catalog-item_info">
            <span v-if="props.item.type == 'case'">
                Кол-во: {{ props.item.count }}
            </span>
      <span v-if="props.item.type == 'weapon'">
                {{ props.item.float }}
            </span>
    </div>
    <div class="b-trade-catalog-item_price">
            <span> 
                {{ props.item.cost }} ₽
            </span>
    </div>
    <a class="standart-btn" v-if="itemCount === 0" @click="addToCart">
      <p>Обмен</p>
    </a>
    <a class="standart-btn" v-else-if="itemCount !== 0 && item.type === 'weapon'" @click="deleteFromCart">
      <p>Вернуть</p>
    </a>
    <div v-else-if="itemCount === props.item.count && item.type === 'case'" class="multu-сhoice">
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
    <div v-else-if="itemCount !== 0 && props.item.type === 'case'" class="multu-сhoice">
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


<style lang="scss">
.multu-сhoice {
  display: flex;
  justify-content: space-between;
}

.multu-сhoice a p {
  width: 22px;
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