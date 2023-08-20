<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  item: {
    type: Object, default() {
      return {}
    }
  }
})

</script>

<template>
  <div class="b-inventory-item">
    <img :src="props.item.img" alt="">
    <div class="b-inventory-item_info">
            <span v-if="item.type == 'case'">
                Кол-во: {{ props.item.count }}
            </span>
      <span v-if="item.type == 'veapone'">
                {{ props.item.float }}
            </span>
    </div>
    <div class="b-inventory-item_price">
            <span> 
            {{ props.item.cost }} ₽
        </span>
    </div>
    <a href="#">
      <p>
        market
      </p>
    </a>
  </div>
</template>


<style lang="scss" scoped>
.b-inventory-item {
  height: 210px;
  width: 210px;
  margin: 0 10px;
}

.b-inventory-item img {
  width: 200px;
}
</style>