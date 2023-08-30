<script setup lang="ts">
import bInput from '../ui-components/b-input.vue'
import bSelect from '../ui-components/b-select.vue'
import FilterItemType from "@/interfaces/filterItemTypeInterface";

const emit = defineEmits(['changeOptions'])
const props = defineProps({
  selectedType: {
    type: String,
    default: () => ''
  },
  itemType: {
    type: Array,
    default: () => [] as FilterItemType[]
  }
})

const changeOptions = (type: string) => {
  emit('changeOptions', type)
}

</script>

<template>
  <div class="b-trade-filters">
    <p>Наименование предмета: </p>
    <bInput/>
    <p>Тип: </p>
    <bSelect
        :selected="props.selectedType"
        :options="props.itemType"
        @changeOptions="changeOptions"
    />
  </div>
</template>

<style lang="scss">
.b-trade-filters {
  width: 310px;
  height: 504px;
  background-color: $main-bg-light;
  padding: 15px;
  border-radius: $b-account-case-border-radius;
  margin-top: $margin * 2;
}
</style>