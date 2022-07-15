import { applyMiddleware, compose, createStore, Middleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootSaga } from "./root-saga";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// const middlewares = [
//     process.env.NODE_ENV !== 'production' && logger,
//     thunk
// ].filter(Boolean);
export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}


type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}
const persistConfig: ExtendedPersistConfig = {
key: 'root',
storage,
whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));


const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middlewares));


export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
