import { createStore } from "vuex";

// Импортируем модули с определениями состояния, мутаций, действий и геттеров
import state from "./state/state";
import mutations from "./mutations/mutations";
import commonActions from './actions/actions'
import apiRequests from "./actions/api-requests";
import getters from "./getters/getters";

// Объединяем общие действия и действия для API запросов
const actions = {...commonActions, ...apiRequests}

// Создаем хранилище Vuex с переданными модулями
const store = createStore({
    state,       // Состояние приложения
    mutations,   // Мутации для изменения состояния
    actions,     // Действия, которые могут вызывать мутации
    getters      // Геттеры для получения данных из состояния
})

export default store;



