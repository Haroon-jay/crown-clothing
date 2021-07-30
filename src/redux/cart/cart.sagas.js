import {all,call,takeLatest,put} from "redux-saga/effects"
import { clearCart } from "./cartAction"

export function* clearCartOnSignout(){
    console.log("clearing cart")
    yield put(clearCart())
}


export function* onSignOutSuccess(){
yield takeLatest("SIGN_OUT_SUCCESS",clearCartOnSignout)
}

export function* cartSagas(){
    yield all([
call(onSignOutSuccess)
    ])
}

