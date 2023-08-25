<script setup lang="ts">
import Account from "@/interfaces/accountInterface";
import {PropType} from "vue";

const props = defineProps({
  account: {
    type: Object as PropType<Account>,
    default: () => {}
  }
})
</script>

<template>
  <div class="b-account-info">
    <h2>
      Контактная информация
    </h2>
    <p class="b-account-li">
      E-mail: {{ props.account.email }}
    </p>
    <p class="b-account-li">
      Телефон: {{ props.account.phone }}
    </p>
    <p class="b-account-li">
      Steam id: {{ props.account.idSteam }}
    </p>
  </div>
</template>


<style lang="scss">
</style>