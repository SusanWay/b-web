import { defineStore } from 'pinia'
import {ref, computed} from "vue"
import Inventory from "@/interfaces/inventoryInterface"
import axios from "axios"
import Item from "@/interfaces/itemInterface"

const API_BASE_URL = "http://localhost:3000"


export const useInventoryStore = defineStore('inventorys', () => {
    const inventorysList = ref( [] as Inventory[])
    const inventoryCurrent= ref( {} as Inventory )
    const itemsList = ref([] as Item[])

    const GET_INVENTORYS = computed(()=>{
        return inventorysList.value
    })
    const GET_INVENTORY_CURRENT = computed(() => {
        return inventoryCurrent.value
    })
    const GET_INVENTORY_CURRENT_ITEMS = computed(()=>{
        return inventoryCurrent.value.items
    })
    const GET_ITEMS = computed(()=>{
        return itemsList.value
    })

    const GET_INVENTORYS_FROM_API = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/inventorys`)
            inventorysList.value = response.data
            return response.data
        }catch (error){
            console.error(error)
            throw error
        }
    }

    const GET_INVENTORY_CURRENT_FROM_API = async (id:string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/inventorys/${id}`)
            inventoryCurrent.value = response.data
            return response.data
        }catch (error){
            console.error(error)
            throw error
        }
    }

    const GET_ITEMS_FROM_API = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/inventorys`)
            itemsList.value = response.data.flatMap((inventory: Inventory) => inventory.items)
            return response
        }catch (error) {
            console.error(error);
            throw error;
        }
    }

    return {
        inventorysList,
        inventoryCurrent,
        itemsList,
        GET_INVENTORYS,
        GET_INVENTORY_CURRENT,
        GET_INVENTORY_CURRENT_ITEMS,
        GET_ITEMS,
        GET_INVENTORYS_FROM_API,
        GET_INVENTORY_CURRENT_FROM_API,
        GET_ITEMS_FROM_API
    }
})