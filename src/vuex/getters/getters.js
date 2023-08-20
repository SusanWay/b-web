export default {
    // Геттер для получения списка аккаунтов
    ACCOUNTS: state => state.accounts,

    // Геттер для получения текущего аккаунта
    CURRENT_ACCOUNT: state => state.currentAccount,

    // Геттер для получения списка инвентарей
    INVENTORIES: state => state.inventorys,

    // Геттер для получения текущего инвентаря
    CURRENT_INVENTORY: state => state.currentInventory,

    // Геттер для получения списка предметов
    ITEMS: state => state.items,

    // Геттер для получения корзины
    CART: state => state.cart,
};