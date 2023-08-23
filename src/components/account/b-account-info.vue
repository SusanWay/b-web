<script setup>
const props = defineProps({
  accountInfo: {
    type: Object, default() {
      return {}
    }
  }
})
</script>

<template>
  <div class="b-account-info">
    <h2>
      Контактная информация
    </h2>
    <p class="b-account-li">
      E-mail: {{ props.accountInfo.email }}
    </p>
    <p class="b-account-li">
      Телефон: {{ props.accountInfo.phone }}
    </p>
    <p class="b-account-li">
      Steam id: {{ props.accountInfo.steamId }}
    </p>
  </div>
</template>


<style lang="scss">
</style>