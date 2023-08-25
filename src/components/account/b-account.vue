<script setup lang="ts">
import {onMounted} from "vue"
import {useAccountStore} from "@/stores/accountStore"
import {useInventoryStore} from "@/stores/inventoryStore";
import {useRoute} from "vue-router";
import bAccountProfile from './b-account-profile.vue'
import bAccountInfo from './b-account-info.vue'
import bAccountInventory from './b-account-inventory.vue'

const accountStore = useAccountStore()
const inventoryStore = useInventoryStore()
const route = useRoute()
const id = route.params.id as string
const idInventory = route.params.idInventory as string
let fetchData = async function () {
  try {
    await accountStore.GET_ACCOUNT_CURRENT_FROM_API(id)
    await inventoryStore.GET_INVENTORY_CURRENT_FROM_API(idInventory)
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
          v-bind:account="accountStore.GET_CURRENT_ACCOUNT"
      />
      <bAccountInfo
          v-bind:account="accountStore.GET_CURRENT_ACCOUNT"
      />
    </div>
    <div class="case">
      <bAccountInventory/>
    </div>
  </div>
</template>

<style lang="scss">
</style>