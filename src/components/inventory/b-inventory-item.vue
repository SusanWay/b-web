<script setup lang="ts">
import {ref} from 'vue'
import bPopupItem from '../ui-components/b-popup-item.vue'

const props = defineProps({
  item: {
    type: Object, default() {
      return {}
    }
  }
})

const confirmationPopup = ref()
const openPopup = async () => {
  await confirmationPopup.value.open()
}
</script>

<template>
  <div class="b-inventory-item">
    <img @click="openPopup" :src="props.item.img" alt="">
    <bPopupItem
        ref="confirmationPopup"
        :item="props.item"
    />
    <div class="b-inventory-item_info">
      <span v-if="item.type == 'case'">
        Кол-во: {{ props.item.count }}
      </span>
      <span v-else>
        {{ props.item.float }}
      </span>
    </div>
    <div class="b-inventory-item_price">
      <span>
        {{ props.item.cost }} ₽
      </span>
    </div>
    <a>
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