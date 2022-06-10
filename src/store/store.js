import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const composedEnhancer = composeEnhancer(applyMiddleware(...middlewares));


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);