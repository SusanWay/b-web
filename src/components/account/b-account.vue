<script setup>
import {onMounted} from "vue";
import {useStore} from 'vuex';
import {useRoute} from "vue-router";
import bAccountProfile from './b-account-profile.vue'
import bAccountInfo from './b-account-info.vue'
import bAccountInventory from './b-account-inventory.vue'

const store = useStore()
const route = useRoute()
let fetchData = async function () {
  try {
    await store.dispatch('GET_CURRENT_ACCOUNT_FROM_API', route.params.id)
    await store.dispatch('GET_CURRENT_INVENTORY_FROM_API', route.params.id_inventory)
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
          v-bind:accountProfile="{
                name: store.state.currentAccount.name,
                registrationDate: store.state.currentAccount.registration_date
            }"
      />
      <bAccountInfo
          v-bind:accountInfo="{
                email: store.state.currentAccount.email,
                phone: store.state.currentAccount.phone,
                steamId: store.state.currentAccount.steam_id
            }"
      />
    </div>
    <div class="case">
      <bAccountInventory/>
    </div>
  </div>
</template>

<style lang="scss">
</style>