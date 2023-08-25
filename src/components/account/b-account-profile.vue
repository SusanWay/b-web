<script setup lang="ts">
import {computed, ref, PropType} from "vue";
import {dateFormater} from '../utils/scripts'
import Account from "@/interfaces/accountInterface";

const props = defineProps({
  account: {
    type: Object as PropType<Account>,
    default: () => {}
  }
})


const registrationDate = computed(() => {
  const {registrationDate} = props.account

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
      Логин: {{ props.account.name }}
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