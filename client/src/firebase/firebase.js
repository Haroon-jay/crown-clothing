import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyBIdumyBc-EMbIVfK5JhWaWiQa0VZr7I0I",
    authDomain: "crown-db-80448.firebaseapp.com",
    projectId: "crown-db-80448",
    storageBucket: "crown-db-80448.appspot.com",
    messagingSenderId: "139037390957",
    appId: "1:139037390957:web:937980c890b6c023066764"}


    if (!firebase.apps.length) {
        firebase.initializeApp(config);
        console.log("help")
     }else {
         console.log("dont help")
        firebase.app()
     }

export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return
    const userRef=fireStore.doc(`users/${userAuth.uid}`)
    const snapShot =await userRef.get()
    if(!snapShot.exists){
        
        const {displayName,email}=userAuth
        console.log(userAuth)
        const createdAt=new Date()
        try{
            await userRef.set({
                displayName,email,createdAt,...additionalData
               
            })
        }catch(e){
            console.log(e)
        }
    }
    
    return userRef
    }
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const convertCollectionsSnapshotToMap=collections=>{
    const transformedCollection=collections.docs.map(doc=>
        {
            const {title,items}=doc.data()
            return{
                routeName:encodeURI(title.toLowerCase()),
                id:doc.id,
                title,items
            }
        })
console.log(transformedCollection)
      return transformedCollection.reduce((accumulator,collection)=>{
             accumulator[collection.title.toLowerCase()]=collection
             console.log(accumulator)
             return accumulator
         },{})
}

export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe=auth.onAuthStateChanged(userAuth=>{
            console.log(userAuth)
            unsubscribe()
            resolve(userAuth)
        },reject)
    })
}

export const auth=firebase.auth()
export const fireStore=firebase.firestore()

export const googleProvider=new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt:"select_account"})

export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider)
export default firebase