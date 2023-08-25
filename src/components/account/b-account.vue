<script setup lang="ts">
import {onMounted} from "vue";
import {useStore} from 'vuex';
import {useAccountStore} from "@/stores/accountStore";
import {useRoute} from "vue-router";
import bAccountProfile from './b-account-profile.vue'
import bAccountInfo from './b-account-info.vue'
import bAccountInventory from './b-account-inventory.vue'

const store = useStore()
const accStore = useAccountStore()
const route = useRoute()
const id = route.params.id as string
const idInventory = route.params.idInventory
let fetchData = async function () {
  try {
    await accStore.GET_CURRENT_ACCOUNT_FROM_API(id)
    await store.dispatch('GET_CURRENT_INVENTORY_FROM_API', idInventory)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(fetchData)

</script>

<template>
  <div class="b-account">
    <div class="case">
      <bAccountProfile
          v-bind:account="accStore.GET_CURRENT_ACCOUNT"
      />
      <bAccountInfo
          v-bind:account="accStore.GET_CURRENT_ACCOUNT"
      />
    </div>
    <div class="case">
      <bAccountInventory/>
    </div>
  </div>
</template>

<style lang="scss">
</style>