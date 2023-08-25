<script setup lang="ts">
import {computed, PropType} from "vue";
import {dateFormater} from '../utils/scripts'
import Account from '@/interfaces/accountInterface'



const props = defineProps({
  account: {
    type: Object as PropType<Account>,
    default() {
      return {}
    }
  }
})

const lastActivityAccount = computed(() => {
  const {lastActivity} = props.account

  if (lastActivity) {
    return dateFormater(lastActivity)
  }

  return 'Нет данных';
})

</script>


<template>
  <div class="b-catalog-item">
    <p class="b-catalog-item_element">{{ props.account.name }}</p>
    <p class="b-catalog-item_element">{{ lastActivityAccount }}</p>
    <router-link class="b-catalog-item_element_btn"
                 :to="`/accaunts/${props.account?.id}/${props.account?.idInventory}`">
      <p>
        Подробнее
      </p>
    </router-link>
    <a class="b-catalog-item_element_btn" href="#home"><p>Удалить</p></a>
  </div>
</template>


<style lang="scss">
.b-catalog-item {
  padding: 20px 0px 20px 0px;
}

.b-catalog-item_element_btn {
  border-radius: 4px;
  margin: 16px 0px 16px 0px;
  border: $b-li-border-bottom;
  background-color: $main-bg-hover;
}
</style>