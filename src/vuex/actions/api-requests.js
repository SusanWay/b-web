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
        console.log('http://localhost:3000/accounts/' + id)
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
    }
}