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
            'http://localhost:3000/inventorys'
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
    },
    GET_ITEMS_FROM_API({commit}){
        return axios.get(
            'http://localhost:3000/inventorys'
            )
            .then((inventorys) =>{
                let items = {}
                let count = 0;
                for (let num_of_obj = 0; num_of_obj < inventorys.data.length; num_of_obj++){
                    for(let num_of_item = 0; num_of_item < inventorys.data[num_of_obj].items.length; num_of_item++){
                        items[count] = inventorys.data[num_of_obj].items[num_of_item]
                        count++
                    }
                }
                commit('SET_ITEMS_TO_STATE', items)
                return inventorys
            })
            .catch((error) =>{
                console.log(error)
                return error
            })
    }
}