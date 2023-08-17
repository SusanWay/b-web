export default {
    ADD_TO_CART({commit}, item){
        commit('SET_ITEM_TO_CART', item)
    },
    DELETE_FROM_CART({commit}, item){
        commit('DELETE_ITEM_FROM_CART', item)
    }
}