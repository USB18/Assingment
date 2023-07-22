import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "../reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducer=combineReducers({
    appReducer:appReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store=createStore(persistedReducer,applyMiddleware(...[thunk, logger]))
export let persistor = persistStore(store)