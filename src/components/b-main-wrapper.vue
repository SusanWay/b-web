<script setup lang="ts">

</script>

<template>
  <div class="b-main-wrapper">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>


<style lang="scss">
.b-main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}

.b-main-wrapper .container {
  width: $b-container-width;
}
</style>