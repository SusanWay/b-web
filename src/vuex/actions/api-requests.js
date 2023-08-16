import axios from "axios";

export default {
    GET_ACCOUNTS_FROM_API({commit}){
        return axios.get(
            'http://localhost:3000/accounts'
            )
            .then((accounts) => {
                commit('SET_ACCOUNTS_TO_STATE', accounts.data)
                return accounts
            })
            .catch((error) => {
                console.log(error)
                return error
            })
    },
    GET_CURRENT_ACCOUNTS_FROM_API({commit}, id){
        return axios.get(
            'http://localhost:3000/accounts/' + id 
            )
            .then((account) => {
                commit('SET_CURRENT_ACCOUNT_TO_STATE', account.data)
                return account
            })
            .catch((error) =>{
                console.log(error)
                return error
            })
    },
    GET_INVENTORYS_FROM_API({commit}){
        return axios.get(
            'http://localhost:3000/inventorys/'
            )
            .then((inventorys) =>{
                commit('SET_INVENTORYS_TO_STATE', inventorys.data)
                return inventorys
            })
            .catch((error) =>{
                console.log(error)
                return error
            })
    },
    GET_CURRENT_INVENTORY_FROM_API({commit}, id){
        return axios.get(
            'http://localhost:3000/inventorys/' + id
            )
            .then((inventory) =>{
                commit('SET_CURRENT_INVENTORY_TO_STATE', inventory.data)
                return inventory
            })
            .catch((error) =>{
                console.log(error)
                return error
            })
    }
}