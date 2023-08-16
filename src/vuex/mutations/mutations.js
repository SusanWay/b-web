export default {
    SET_ACCOUNTS_TO_STATE: (state, accounts) => {
        state.accounts = accounts
    },
    SET_CURRENT_ACCOUNT_TO_STATE: (state, account) => {
        state.current_account = account
    }
}