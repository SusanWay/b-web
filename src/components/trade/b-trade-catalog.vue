<template>
    <div class="b-trade-catalog">
        <h2>
            Предметы доступные для обмена
        </h2>
        <div class="b-trade-inventory">
            <bTradeCatalogItem
            v-for="item in filteredItems"
            :key="item.id_steam"
            :item="item"
            @deleteFromCart="deleteFromCart"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import bTradeCatalogItem from './b-trade-catalog-item.vue'

export default{
    name: 'b-trade-catalog',
    data(){
        return {
          sortedItems: []
        }
    },
  computed: {
      filteredItems(){
        if(this.selectedType != 'ALL'){
          this.sortedItemsByType()
          return this.sortedItems
        }
        return this.ITEMS()
      }
  },
    props:{
      selectedType: {
        type: String,
        default(){
          return ''
        }
      }
    },
    components: {
        bTradeCatalogItem
    },
    methods: {
        ...mapActions([
            'GET_ITEMS_FROM_API',
            'ADD_TO_CART',
            'DELETE_FROM_CART'
        ]),
      ...mapGetters([
          'ITEMS'
      ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        },
        deleteFromCart(data){
            this.DELETE_FROM_CART(data)
        },
      sortedItemsByType(){
          this.sortedItems = []
          for(const item of this.ITEMS()){
            if(this.selectedType === item.type){
              this.sortedItems.push(item)
            }
          }
      }
    },
    mounted(){
        this.GET_ITEMS_FROM_API()
    }

}
</script>

<style lang="scss">
</style>