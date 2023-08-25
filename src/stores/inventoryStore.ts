import { defineStore } from 'pinia'
import {ref, computed} from "vue";
import Inventory from "@/interfaces/inventoryInterface";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"


export const useAccountStore = defineStore('accounts', () => {
    const inventorysList = ref( [] as Inventory[])
    const inventoryCurrent= ref( {} as Inventory )

    const GET_INVENTORYS = computed(()=>{
        return inventorysList.value
    })
    const GET_INVENTORY_CURRENT = computed(() => {
        return inventoryCurrent.value
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

    return {inventorysList, inventoryCurrent, GET_INVENTORYS, GET_INVENTORY_CURRENT, GET_INVENTORYS_FROM_API, GET_INVENTORY_CURRENT_FROM_API}
})