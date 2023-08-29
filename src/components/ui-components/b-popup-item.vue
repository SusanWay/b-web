<script setup lang="ts">
import {defineExpose, ref, PropType} from "vue"
import Item from "@/interfaces/itemInterface";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
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
          <img :src="props.item?.img">
        </div>
        <div class="popup-content-text">
          <h1>{{ props.item.name }}</h1>
          <div>
            <p>text text</p>
            <p>text text</p>
            <p>text text</p>
            <p>text text</p>
            <p>text text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

.popup h1 {
  text-align: center;
  margin: 0;
  color: white;
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
  height: 500px;
  width: 680px;
}

.popup-content-text {
  width: 430px;
}

.popup-content-text div {
  background-color: $main-bg-inventory-btn;
  padding: $padding * 3;
  text-align: justify;
}

.popup-content-img,
.popup-content-text {
  //background-color: $main-bg-inventory-btn;
  padding: $padding;
  border-radius: $radius;
}
</style>
