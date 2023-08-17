export default {
    ADD_TO_CART({commit}, item){
        commit('SET_ITEM_TO_CART', item)
    }
}