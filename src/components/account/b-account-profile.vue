<script setup>
import {computed, defineProps, ref} from "vue";
import {dateFormater} from '../utils/scripts'

const props = defineProps({
  accountProfile: {
    type: Object, default() {
      return {}
    }
  }
})

const registrationDate = computed(() => {
  const {registrationDate} = props.accountProfile

  if (registrationDate) {
    return dateFormater(registrationDate)
  }

  return 'Нет данных';
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
      Дата регистарции: {{ registrationDate }}
    </p>
    <p class="b-account-li">
      Обменов: {{ trades }}
    </p>
  </div>
</template>


<style lang="scss">
</style>