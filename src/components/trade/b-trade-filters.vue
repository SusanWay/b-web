<template>
    <div class="b-trade-filters">
      <p>Наименование предмета: </p>
      <bInput/>
      <p>Тип: </p>
      <bSelect
      :selected="selectedType"
      :options="itemType"
      @changeOptions="sortByType"
      />
    </div>
</template>

<script>
import bInput from '../b-input.vue'
import bSelect from '../b-select.vue'
export default {
    name: 'b-trade-filters',
  props: {
    selectedType: {
        type: String,
        default() {
          return ''
        }
      },
    itemType: {
        type: Array,
      default() {
        return [];
      }
    }
  },
    data() {
        return {}
    },
  components:{
    bInput,
    bSelect
  },
  methods: {
    sortByType(type){
      this.$emit('sortByType', type)
    }
  }
}
</script>

<style lang="scss">
    .b-trade-filters{
        width: 310px;
        height: 504px;
        background-color: $main-bg-light;
        padding: 15px;
        border-radius: $b-account-case-border-radius;
        margin-top: $margin * 2;
    }
</style>