import { createStore,applyMiddleware } from "redux";
import {persistStore} from "redux-persist"
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";
import rootSaga from "./root-saga";
const sagaMiddleWare=createSagaMiddleware()
const middleWares=[sagaMiddleWare,logger]
export const store=createStore(rootReducer,applyMiddleware(...middleWares))

sagaMiddleWare.run(rootSaga)
export const persistor=persistStore(store)
//export default {store,persistor}