export default {
    // Действие для добавления предмета в корзину
    ADD_TO_CART({ commit }, item) {
      commit('SET_ITEM_TO_CART', item);
    },
  
    // Действие для удаления предмета из корзины
    DELETE_FROM_CART({ commit }, item) {
      commit('DELETE_ITEM_FROM_CART', item);
    }
  };