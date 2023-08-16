import { createStore } from "vuex";

import state from "./state/state";
import mutations from "./mutations/mutations";
import apiRequests from "./actions/api-requests";
import getters from "./getters/getters";

const actions = {...apiRequests}

let store = createStore(
    {
        state,
        mutations,
        actions,
        getters
    }
)

export default store;