export const updateCollections=(collectionsMap)=>{
    console.log(collectionsMap)
    return{
        type:"UPDATE_COLLECTION",
        payload:collectionsMap
    }
}