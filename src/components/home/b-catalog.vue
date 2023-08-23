<script setup lang="ts">
import {onMounted} from "vue";
import {useStore} from 'vuex';
import bCatalogItem from './b-catalog-item.vue';

const store = useStore()

onMounted(() => {
  store.dispatch('GET_ACCOUNTS_FROM_API')
})

</script>

<template>
  <div class="b-catalog">
    <h1 class="b-h1">Список аккаунтов</h1>
    <div class="b-catalog__header">
      <div class="b-catalog__header__items">
        <p>Логин</p>
        <p>Последняя активность</p>
        <p>Информация</p>
        <p>Удалить</p>
      </div>
    </div>
    <div class="b-catalog__items">
      <bCatalogItem
          v-for="account in this.$store.state.accounts"
          :key="account.id"
          v-bind:acc_data="account"
      />
    </div>
  </div>
</template>

<style lang="scss">
.b-catalog {
  width: $b-container-width;
  margin-top: $margin-top;
  background-color: $main-bg-light;
  padding: 30px;
  border-radius: 15px;
}

.b-catalog__items {
  display: flex;
  flex-direction: column;
}

.b-h1 {
  text-align: center;
}
</style>