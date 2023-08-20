<template>
    <div class="b-trade-btn">
        <div class="b-trade-btn-box">
            <a v-if="CART().length > 0" class="b-trade-item_element_btn enabled" href="#home"><p>Обменяться</p></a>
            <a v-else class="b-trade-item_element_btn disabled"><p>Обменяться</p></a>
            <p>{{ cartTotalCost }}  ₽</p>
            <p>предметов: {{ cartTotalItems }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'b-trade-btn',
  data() {
    return {}
  },
  methods: {
      ...mapGetters([
          'CART'
      ])
  },
  computed: {
    cartTotalItems(){
      const cart = this.CART()
      return cart.reduce((result, item) => result + item.quantity, 0)
    },
    cartTotalCost(){
      const cart = this.CART()
      return cart.reduce((result, item) => result + item.quantity * item.cost, 0).toFixed(2)
    }
  }
}
</script>

<style lang="scss">
    .b-trade-btn{
        width: 310px;
        height: 180px;
        padding: 15px;
        background-color: $main-bg-light;
    }

    .enabled p{
        background-color: $main-bg-hover;
    }

    .disabled p {
      background-color: $main-bg;
      cursor: not-allowed;
    }

    .disabled p, .enabled p{
      border: 4px ;
    }

    .b-trade-item_element_btn p{
        border-radius: 4px;
        padding: 5px;
        height: 30px;
    }

    .b-trade-btn-box{
        background-color: $main-bg-inventory;
        text-align: center;
        border-radius: 15px;
        padding-bottom: 5px;
    }
</style>