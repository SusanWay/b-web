<script setup>
import bInventory from '../inventory/b-inventory.vue';
</script>

<template>
  <div class="b-account-inventory">
    <h2>
      Инвентарь
    </h2>
    <div>
      <bInventory/>
    </div>
  </div>
</template>


<style lang="scss">
.b-account-inventory {
  height: 450px;
  width: $b-container-width;
}
</style>