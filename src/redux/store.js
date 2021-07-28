import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {persistStore} from "redux-persist"
import rootReducer from "./root-reducer";
const middleWares=[thunk]
export const store=createStore(rootReducer,applyMiddleware(...middleWares))
export const persistor=persistStore(store)
//export default {store,persistor}