<script setup lang="ts">
import FilterItemType from "@/interfaces/filterItemTypeInterface"

const emit = defineEmits(['changeOptions'])
const props = defineProps({
  selected: {
    type: String,
    default() {
      return ''
    }
  },
  options: {
    type: Array<FilterItemType>,
    default() {
      return [] as FilterItemType[]
    }
  }
})

const changeOptions = (event: Event) => {
  emit('changeOptions', (event.target as HTMLInputElement).value)
}

</script>

<template>
  <div class="b-select">
    <select
        :value="props.selected"
        @change="changeOptions($event)"
    >
      <option v-for="option of props.options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
.b-select select {
  width: 100%;
  font-size: 20px;
  background-color: $main-bg-inventory-btn;
  border: 0;
  outline: none;
  padding: $padding;
}
</style>