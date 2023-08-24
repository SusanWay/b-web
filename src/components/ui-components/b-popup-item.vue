<script setup lang="ts">
import {defineExpose, ref} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default() {
      return {}
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
      <h1>Внимание!</h1>
      <h1>{{ props.item.name }}</h1>
    </div>
  </div>
</template>

<style>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  background-color: white;
  border-radius: 10px;
}

.popup h1 {
  text-align: center;
  margin: 0;
  color: black;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
