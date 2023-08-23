<script setup lang="ts">
import {computed} from "vue";
import {dateFormater} from '../utils/scripts'

const props = defineProps({
  acc_data: {
    type: Object, default() {
      return {}
    }
  }
})

const lastActivity = computed(() => {
  const {last_activity} = props.acc_data

  if (last_activity) {
    return dateFormater(last_activity)
  }

  return 'Нет данных';
})

</script>

<template>
  <div class="b-catalog-item">
    <p class="b-catalog-item_element">{{ props.acc_data.name }}</p>
    <p class="b-catalog-item_element">{{ lastActivity }}</p>
    <router-link class="b-catalog-item_element_btn"
                 :to="`/accaunts/${props.acc_data.id}/${props.acc_data.id_inventory}`">
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