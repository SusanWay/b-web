export default {
    SET_ACCOUNTS_TO_STATE: (state, accounts) => {
        state.accounts = accounts
    },
    SET_CURRENT_ACCOUNT_TO_STATE: (state, account) => {
        state.current_account = account
    },
    SET_INVENTORYS_TO_STATE: (state, inventorys) =>{
        state.inventorys = inventorys
    },
    SET_CURRENT_INVENTORY_TO_STATE: (state, inventory) => {
        state.current_inventory = inventory
    }
}