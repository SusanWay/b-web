export default {
    // Геттер для получения списка аккаунтов
    ACCOUNTS: (state: {accounts: Array<Object>}) => state.accounts,

    // Геттер для получения текущего аккаунта
    CURRENT_ACCOUNT: (state: {currentAccount: Object}) => state.currentAccount,

    // Геттер для получения списка инвентарей
    INVENTORIES: (state: {inventorys: Array<Object>}) => state.inventorys,

    // Геттер для получения текущего инвентаря
    CURRENT_INVENTORY: (state: {currentInventory: Object}) => state.currentInventory,

    // Геттер для получения списка предметов
    ITEMS: (state: {items: Array<Object>}) => state.items,

    // Геттер для получения корзины
    CART: (state: {cart: Array<Object>}) => state.cart,
};