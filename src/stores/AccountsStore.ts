import { defineStore } from 'pinia'
import {ref, computed} from "vue";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"

interface Account {
    "id": number,
    "id_inventory": number,
    "name": string,
    "last_activity": string,
    "registration_date": string,
    "email": string,
    "phone": string,
    "steam_id": string
}

export const useAccountsStore = defineStore('accounts', () => {
    const accountsList = ref( [] as Account[])
    const currentAccount= ref( {} as Account )

    const GET_ACCOUNTS = computed(()=>{
        return accountsList.value
    })
    const GET_CURRENT_ACCOUNT = computed(() => {
        return currentAccount.value
    })

    const GET_ACCOUNTS_FROM_API = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/accounts`)
            accountsList.value = response.data
            return response.data
        }catch (error){
            console.error(error)
            throw error
        }
    }

    const GET_CURRENT_ACCOUNT_FROM_API = async (id:number) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/accounts/${id}`)
            currentAccount.value = response.data
            return response.data
        }catch (error){
            console.error(error)
            throw error
        }
    }

    return {GET_ACCOUNTS, GET_CURRENT_ACCOUNT, GET_ACCOUNTS_FROM_API, GET_CURRENT_ACCOUNT_FROM_API}
})