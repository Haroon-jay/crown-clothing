
import {convertCollectionsSnapshotToMap,fireStore} from "../../firebase/firebase"
export const fetchCollectionsStart=()=>{
    return{
        type:"FETCH_COLLECTIONS_START",
        
    }
}
export const fetchCollectionsSuccess=(collectionsMap)=>{
return{
    type:"FETCH_COLLECTIONS_SUCCESS",
    payload:collectionsMap
}
}
export const fetchCollectionsFailure=error=>{
    return{
        type:"FETCH_COLLECTIONS_FAILURE",
        payload:error
    }
}
export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef = fireStore.collection('collections');
         dispatch(fetchCollectionsStart())
         collectionRef.get().then(snap=>{
          const collectionsMap= convertCollectionsSnapshotToMap(snap)
          dispatch(fetchCollectionsSuccess(collectionsMap))
         // updateCollections(collectionsMap)
         
         }).catch(e=>dispatch(fetchCollectionsFailure(e.message)))
    }
}