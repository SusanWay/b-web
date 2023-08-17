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
    },
    SET_ITEMS_TO_STATE: (state, items) => {
        state.items = items
    },
    SET_ITEM_TO_CART: (state, item) => {
        let onCart = false
        for(let i = 0; i < state.cart.length; i++){
            if(state.cart[i].id_steam == item.id_steam){
                onCart = true
                state.cart[i].quantitu++
                break
            }
        }
        if(!onCart){
            item = {...item, 'quantitu': 1}
            state.cart.push(item)
        }
    },
    DELETE_ITEM_FROM_CART: (state, item) => {
        for(let i = 0; i < state.cart.length; i++){
            if(state.cart[i].id_steam == item.id_steam){
                if(state.cart[i].quantitu == 1){
                    state.cart.splice(i, 1)
                    break
                }
                else{
                    state.cart[i].quantitu--
                    break
                }
            }
        }
    }
}