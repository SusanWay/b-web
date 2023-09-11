<script setup lang="ts">
import {computed, PropType} from "vue"
import Item from "@/interfaces/itemInterface"
import {useCartStore} from "@/stores/cartStore"

const cartStore = useCartStore()

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    default: () => {}
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
  const existingCartItemIndex = cartStore.GET_CART_ITEMS.findIndex(cartItem => cartItem.idSteam === props.item?.idSteam)

  if (existingCartItemIndex !== -1) {
    return cartStore.GET_CART_ITEMS[existingCartItemIndex].quantity
  }
  return 0
})

</script>

<template>
  <div class="b-btn">
    <a class="standart-btn" v-if="itemCount === 0" @click="addToCart">
      <p>Обмен</p>
    </a>
    <a class="standart-btn" v-else-if="itemCount !== 0 && item.type === 'weapon'" @click="deleteFromCart">
      <p>Вернуть</p>
    </a>
    <div v-else-if="itemCount === props.item?.count && item.type === 'case'" class="multu-сhoice">
      <a @click="deleteFromCart">
        <p>
          –
        </p>
      </a>
      <span>
        <p> {{ itemCount }}</p>
      </span>
      <a class="disablend">
        <p>+</p>
      </a>
    </div>
    <div v-else-if="itemCount !== 0 && props.item?.type === 'case'" class="multu-сhoice">
      <a @click="deleteFromCart">
        <p>--</p>
      </a>
      <span>
        <p> {{ itemCount }} </p>
      </span>
      <a @click="addToCart">
        <p>+</p>
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

.b-item:hover .multu-сhoice .disablend p {
  background-color: $main-bg-inventory;
  cursor: not-allowed;
}
</style>