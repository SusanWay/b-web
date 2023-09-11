<script setup lang="ts">
import {ref, PropType} from "vue"
import Item from "@/interfaces/itemInterface";
import CartItem from "@/interfaces/cartItemInterface.ts";
import bLink from './b-link.vue'

const props = defineProps({
  item: {
    type: Object as PropType<Item> | PropType<CartItem>,
    default: () => {
    }
  }
})

let isOpen = ref(false)

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

defineExpose({
  open
})

</script>

<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup">
      <div class="popup-content">
        <div class="popup-content-img">
          <img :src="props.item?.img" alt="">
          <div class="popup-content-img-btn">
            <bLink></bLink>
            <bLink></bLink>
            <bLink></bLink>
          </div>
        </div>
        <div class="popup-content-text">
          <p> Береты / Factory New</p>
          <p class="popup-main-text">{{ props.item.name }} (Factory New)</p>
          <div>
            <div class="popup-main-text-li">
              <p>Рекомендуемая цена:</p>
              <p>50.32</p>
            </div>
          </div>
          <div>
            <div class="popup-main-text-li">
              <p>Цена:</p>
              <p>{{props.item.cost}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  top: 50px;
  padding: $padding * 3;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  background-color: $main-bg-light;
  border-radius: $radius;
  width: $b-popup-container-width;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.popup-content {
  display: flex;
  justify-content: space-between;
}

.popup-content-img img {
  height: 340px;
  width: 480px;
}

.popup-content-text {
  width: 430px;
}

.popup-content-text div {
  background-color: $main-bg-inventory-btn;
  padding: $padding;
  margin: $margin 0;
  text-align: justify;
}

.popup-content-img,
.popup-content-text {
  //background-color: $main-bg-inventory-btn;
  padding: $padding;
  border-radius: $radius;
}

.popup-main-text,
.popup-content-text p,
{
  margin: $margin * 0.5 0;
}

.popup-main-text{
  font-size: 20px;
}

.popup-main-text-li,
.popup-content-img-btn{
  display: flex;
}

.popup-main-text-li{
  justify-content: space-between;
  padding: 0;
}


</style>
