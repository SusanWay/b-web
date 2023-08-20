<script>
  export default {
    name: 'b-secect',
    props: {
      selected: {
        type: String,
        default(){
          return ''
        }
      },
      options: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{}
    },
    methods: {
      changeOptions(){
        this.$emit('changeOptions', event.target.value)
      }
    }
  }
</script>

<template>
  <div class="b-select">
    <select
        :value="selected"
        @change="changeOptions"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
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
    outline:none;
    padding: $padding;
  }
</style>