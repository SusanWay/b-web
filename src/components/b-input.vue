<script setup>

</script>

<template>
  <div class="b-input">
    <input v-model="message" placeholder="Поиск..."/>
  </div>
</template>

<style lang="scss">
.b-input input {
  width: 100%;
  font-size: 20px;
  background-color: $main-bg-inventory-btn;
  border: 0;
  outline: none;
  padding: $padding;
}
</style>