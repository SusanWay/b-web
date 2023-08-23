<script setup>
const emit = defineEmits(['changeOptions'])
const props = defineProps({
  selected: {
    type: String,
    default() {
      return ''
    }
  },
  options: {
    type: Array,
    default() {
      return []
    }
  }
})

const changeOptions = () => {
  emit('changeOptions', event.target.value)
}

//        this.$emit('changeOptions', event.target.value)

</script>

<template>
  <div class="b-select">
    <select
        :value="props.selected"
        @change="changeOptions"
    >
      <option v-for="option in props.options" :key="option.value" :value="option.value">
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