import { defineStore } from 'pinia'
import {ref, computed} from "vue";
import Account from '../interfaces/accountInterface'
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"


export const useAccountStore = defineStore('accounts', () => {
    const accountsList = ref( [] as Account[])
    const accountCurrent= ref( {} as Account )

    const GET_ACCOUNTS = computed(()=>{
        return accountsList.value
    })
    const GET_ACCOUNT_CURRENT = computed(() => {
        return accountCurrent.value
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

    const GET_ACCOUNT_CURRENT_FROM_API = async (id:string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/accounts/${id}`)
            accountCurrent.value = response.data
            return response.data
        }catch (error){
            console.error(error)
            throw error
        }
    }

    const GET_ACCOUNTS_FOR_FILTER = computed(() =>{
        const result = [{name: 'Не выбран', value: 'None'}]
        for(const account of accountsList.value){
            result.push({name: account.name, value: account.idSteam})
        }
        return result
    })

    return {
        GET_ACCOUNTS,
        GET_CURRENT_ACCOUNT:
        GET_ACCOUNT_CURRENT,
        GET_ACCOUNTS_FROM_API,
        GET_ACCOUNT_CURRENT_FROM_API,
        GET_ACCOUNTS_FOR_FILTER
    }
})