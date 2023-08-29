import {defineStore} from 'pinia'
import {ref, computed, watch} from "vue";
import axios from "axios";
import CartItem from "@/interfaces/cartItemInterface";
import Item from "@/interfaces/itemInterface";

const API_BASE_URL = "http://localhost:3000"


export const useCartStore = defineStore('cart', () => {
    const cart = ref([] as CartItem[])

    const itemsInLocalStore = localStorage.getItem('items')

    if (itemsInLocalStore) {
        console.log(itemsInLocalStore)
        cart.value = JSON.parse(itemsInLocalStore)._value
    }

    watch(() => cart,(state) =>{
        localStorage.setItem('items', JSON.stringify(state))
    }, {deep: true})

    const GET_CART_ITEMS = computed(() => {
        return cart.value
    })
    const ADD_TO_CART = (item: Item) => {
        const existingItemIndex = cart.value.findIndex(cartItem => cartItem.idSteam === item.idSteam);

        if (existingItemIndex !== -1) {
            console.log(12)
            cart.value[existingItemIndex].quantity++
        } else {
            cart.value.push({...item, quantity: 1});
        }
    }

    const DELETE_FROM_CART = (item: Item) => {
        const existingItemIndex = cart.value.findIndex(cartItem => cartItem.idSteam === item.idSteam);

        if (existingItemIndex !== -1) {
            if (cart.value[existingItemIndex].quantity === 1) {
                cart.value.splice(existingItemIndex, 1);
            } else {
                cart.value[existingItemIndex].quantity--;
            }
        }
    }

    return {
        cart,
        GET_CART_ITEMS,
        ADD_TO_CART,
        DELETE_FROM_CART,
    }
})