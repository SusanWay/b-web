import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export default {
    // Получение списка аккаунтов из API и обновление состояния
    async GET_ACCOUNTS_FROM_API({commit}:{commit:any}) {
        try {
            const response = await axios.get(`${API_BASE_URL}/v2/forecast?lat=55.75396&lon=37.620393&extra=true`,{
                headers:{'Yandex-API-Key': '8c3dd080-224b-4837-99a2-eba0adc7d872',
                    'Content-Type': 'application/json'}
            });
            commit('SET_ACCOUNTS_TO_STATE', response.data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Получение текущего аккаунта из API и обновление состояния
    async GET_CURRENT_ACCOUNT_FROM_API({commit}:{commit:any}, id:Number) {
        try {
            const response = await axios.get(`${API_BASE_URL}/accounts/${id}`);
            commit('SET_CURRENT_ACCOUNT_TO_STATE', response.data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Получение списка инвентарей из API и обновление состояния
    async GET_INVENTORYS_FROM_API({commit}:{commit:any}) {
        try {
            const response = await axios.get(`${API_BASE_URL}/inventorys`);
            commit('SET_INVENTORYS_TO_STATE', response.data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Получение текущего инвентаря из API и обновление состояния
    async GET_CURRENT_INVENTORY_FROM_API({commit}:{commit:any}, id:Number) {
        try {
            const response = await axios.get(`${API_BASE_URL}/inventorys/${id}`);
            commit('SET_CURRENT_INVENTORY_TO_STATE', response.data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Получение списка предметов из API и обновление состояния
    async GET_ITEMS_FROM_API({commit}:{commit: any}) {
        try {
            const response = await axios.get(`${API_BASE_URL}/inventorys`);
            const items = response.data.flatMap((inventory: {items: []}) => inventory.items);
            commit('SET_ITEMS_TO_STATE', items);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};
