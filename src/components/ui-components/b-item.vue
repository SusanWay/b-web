<script setup lang="ts">
import {ref, PropType} from 'vue'
import bPopupItem from './b-popup-item.vue'
import Item from "@/interfaces/itemInterface"

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    default: () => {
    }
  }
})

const confirmationPopup = ref()
const openPopup = async () => {
  await confirmationPopup.value.open()
}
</script>

<template>
  <div class="b-item">
    <img @click="openPopup" :src="props.item?.img" alt="">
    <bPopupItem
        ref="confirmationPopup"
        :item="props.item"
    />
    <div class="b-item_info">
            <span v-if="props.item?.type == 'case'">
                Кол-во: {{ props.item.count }}
            </span>
      <span v-if="props.item?.type == 'weapon'">
                {{ props.item.float }}
            </span>
    </div>
    <div class="b-item_price">
            <span>
                {{ props.item.cost }} ₽
            </span>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss">

</style>