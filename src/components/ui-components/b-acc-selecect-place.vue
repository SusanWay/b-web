<script setup lang="ts">
import bSelect from '../ui-components/b-select.vue'
import FilterItemType from "@/interfaces/filterItemTypeInterface"

const props = defineProps({
  msg: {
    type: String,
    default: () => ''
  },
  accounts: {
    type: Array<FilterItemType>,
    default: () => [] as FilterItemType
  }
})

</script>

<template>
  <div class="b-acc-select-place">
    <h2>{{props.msg}}</h2>
    <bSelect/>
  </div>
</template>

<style scoped lang="scss">
.b-acc-select-place{
  height: 180px;
  background-color: $main-bg-light;
  margin-bottom: $margin * 2;
  padding: $padding * 2;
}
</style>