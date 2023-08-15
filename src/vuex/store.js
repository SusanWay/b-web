import { createStore } from "vuex";
import axios from "axios";

let store = createStore(
    {
        state: {
            products: []
        },
        mutations: {
            SET_PRODUCT_TO_STATE: (state, products) => {
                state.products = products
            }
        },
        actions: {
            GET_PTODUCT_FROM_API({commit}){
                return axios.get(
                    'http://localhost:3000/products'
                    )
                    .then((products) => {
                    commit('SET_PRODUCT_TO_STATE', products.data)
                    return products
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
            }
        },
        getters: {
            PRODUCTS(state){
                return state.products
            }
        }
    }
)

export default store;