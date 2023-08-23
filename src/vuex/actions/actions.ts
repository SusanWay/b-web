export default {
    // Действие для добавления предмета в корзину
    ADD_TO_CART({commit}:{commit:any}, item: Object) {
        commit('SET_ITEM_TO_CART', item);
    },

    // Действие для удаления предмета из корзины
    DELETE_FROM_CART({commit}:{commit:any}, item: Object) {
        commit('DELETE_ITEM_FROM_CART', item);
    }
};