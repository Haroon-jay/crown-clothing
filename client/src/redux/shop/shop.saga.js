import { takeLatest,call,put, all } from "redux-saga/effects";
import { fetchCollectionsFailure,fetchCollectionsSuccess } from "./shopActions";
import { fireStore,convertCollectionsSnapshotToMap } from "../../firebase/firebase";
export function* fetchCollectionsAsync(){
  yield console.log("Fetch collections async fired")
  try{
  const collectionRef = fireStore.collection('collections');
const snapShot=yield collectionRef.get()
const collectionsMap=yield call(convertCollectionsSnapshotToMap,snapShot)
yield put(fetchCollectionsSuccess(collectionsMap))
  }catch(e){
  yield put(fetchCollectionsFailure(e.message))
  }  
}
export function* fetchCollectionsStart(){
    yield takeLatest("FETCH_COLLECTIONS_START",fetchCollectionsAsync)
}

export function* shopSagas(){
  yield all([
    call(fetchCollectionsStart)
  ])
}