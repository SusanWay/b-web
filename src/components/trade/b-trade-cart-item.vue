<script setup>
import {defineProps} from "vue";

const props = defineProps({
  item: {
    type: Object, default() {
      return {}
    }
  }
})

</script>

<template>
  <div class="b-trade-cart-item">
    <img :src="props.item.img" alt="">
    <div class="b-trade-cart-item_info">
      <span>
        <p>
          {{ props.item.name }}
        </p>
      </span>
      <span v-if="props.item.type == 'case'">
        <p>
          Кол-во: {{ props.item.quantity }}
        </p>
      </span>
      <span v-if="props.item.type == 'veapone'">
        <p>
          {{ props.item.float }}
        </p>
      </span>
    </div>
    <div class="b-trade-cart-item_price">
      <span>
        <p>
          {{ props.item.cost }} ₽
        </p>
      </span>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>