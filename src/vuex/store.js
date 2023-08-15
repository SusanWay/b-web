import { createStore } from "vuex";

let store = createStore(
    {
        state: {
            products: []
        },
        mutations: {},
        actions: {
        },
        getters: {
            PRODUCTS(state){
                return state.products
            }
        }
    }
)

export default store;