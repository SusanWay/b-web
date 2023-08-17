export default {
    // Мутация для установки списка аккаунтов в состояние
    SET_ACCOUNTS_TO_STATE: (state, accounts) => {
      state.accounts = accounts;
    },
    
    // Мутация для установки текущего аккаунта в состояние
    SET_CURRENT_ACCOUNT_TO_STATE: (state, account) => {
      state.currentAccount = account;
    },
    
    // Мутация для установки списка инвентарей в состояние
    SET_INVENTORIES_TO_STATE: (state, inventories) => {
      state.inventories = inventories;
    },
    
    // Мутация для установки текущего инвентаря в состояние
    SET_CURRENT_INVENTORY_TO_STATE: (state, inventory) => {
      state.currentInventory = inventory;
    },
    
    // Мутация для установки списка предметов в состояние
    SET_ITEMS_TO_STATE: (state, items) => {
      state.items = items;
    },
    
    // Мутация для добавления предмета в корзину или увеличения его количества
    SET_ITEM_TO_CART: (state, item) => {
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id_steam === item.id_steam);
  
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    
    // Мутация для удаления предмета из корзины или уменьшения его количества
    DELETE_ITEM_FROM_CART: (state, item) => {
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id_steam === item.id_steam);
  
      if (existingItemIndex !== -1) {
        if (state.cart[existingItemIndex].quantity === 1) {
          state.cart.splice(existingItemIndex, 1);
        } else {
          state.cart[existingItemIndex].quantity--;
        }
      }
    }
  };