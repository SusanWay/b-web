<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()

const cartTotalItems = computed(() => {
  const cart = store.getters.CART
  return cart.reduce((totalItems, item) => totalItems + item.quantity, 0)
})

const cartTotalCost = computed(() => {
  const cart = store.getters.CART
  return cart.reduce((total, item) => total + item.quantity * item.cost, 0).toFixed(2)
})

</script>

<template>
  <div class="b-trade-btn">
    <div class="b-trade-btn-box">
      <a v-if="store.getters.CART.length > 0" class="b-trade-item_element_btn enabled" href="#home"><p>Обменяться</p>
      </a>
      <a v-else class="b-trade-item_element_btn disabled"><p>Обменяться</p></a>
      <p>{{ cartTotalCost }} ₽</p>
      <p>предметов: {{ cartTotalItems }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.b-trade-btn {
  width: 310px;
  height: 180px;
  padding: 15px;
  background-color: $main-bg-light;
}

.enabled p {
  background-color: $main-bg-hover;
}

.disabled p {
  background-color: $main-bg;
  cursor: not-allowed;
}

.disabled p, .enabled p {
  border: 4px;
}

.b-trade-item_element_btn p {
  border-radius: 4px;
  padding: 5px;
  height: 30px;
}

.b-trade-btn-box {
  background-color: $main-bg-inventory;
  text-align: center;
  border-radius: 15px;
  padding-bottom: 5px;
}
</style>