<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  accountProfile: {
    type: Object, default() {
      return {}
    }
  }
})

let trades = ref(0)
</script>


<template>
  <div class="b-account-profile">
    <h2>
      Профиль
    </h2>
    <p class="b-account-li">
      Логин: {{ props.accountProfile.name }}
    </p>
    <p class="b-account-li">
      Дата регистарции: {{ props.accountProfile.registrationDate }}
    </p>
    <p class="b-account-li">
      Обменов: {{ trades }}
    </p>
  </div>
</template>


<style lang="scss">
</style>