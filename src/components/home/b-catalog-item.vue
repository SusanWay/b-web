<script setup lang="ts">
import {computed, PropType} from "vue";
import {dateFormatter} from '@/utils/dateFormater/dateFormater.js'
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
    return dateFormatter(lastActivity)
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
  padding: 20px 0 20px 0;
}

.b-catalog-item_element_btn {
  border-radius: 4px;
  margin: 16px 0 16px 0;
  border: $b-li-border-bottom;
  background-color: $main-bg-hover;
}
</style>