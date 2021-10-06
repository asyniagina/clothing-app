import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD8rkR-pS59W-yrSgX9352K5CGb6z7FnVM",
    authDomain: "clothing-db-a0166.firebaseapp.com",
    projectId: "clothing-db-a0166",
    storageBucket: "clothing-db-a0166.appspot.com",
    messagingSenderId: "765828483851",
    appId: "1:765828483851:web:59bf65f96796e14b48700e"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAd = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAd,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;