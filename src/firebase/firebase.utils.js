import firebase from "firebase/app";
// Database
import "firebase/firestore"; 
// Authentication
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDFP9rR5EJstONRaBE7QTwQe_TZI_ETDJo",
    authDomain: "lullabypie-store.firebaseapp.com",
    databaseURL: "https://lullabypie-store.firebaseio.com",
    projectId: "lullabypie-store",
    storageBucket: "lullabypie-store.appspot.com",
    messagingSenderId: "1032058749949",
    appId: "1:1032058749949:web:545413e39c4f56f5c80f94",
    measurementId: "G-VNWS9B9TN9"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error){
            console.log(error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;