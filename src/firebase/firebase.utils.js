import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3AGFWXCr4NdRJ9H1E11kQbls8_heNb7c",
  authDomain: "crwn-db-59fc9.firebaseapp.com",
  projectId: "crwn-db-59fc9",
  storageBucket: "crwn-db-59fc9.appspot.com",
  messagingSenderId: "170971012244",
  appId: "1:170971012244:web:d3c405dfa1b04bbc766881",
  measurementId: "G-5HTDF2V70L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
