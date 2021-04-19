import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFSlhRPeCz2C3n9pZ1-NmwJWUCoyPYjJY",
  authDomain: "clone-ea876.firebaseapp.com",
  projectId: "clone-ea876",
  storageBucket: "clone-ea876.appspot.com",
  messagingSenderId: "778056983457",
  appId: "1:778056983457:web:43778732de63d4e1dce1e0",
  measurementId: "G-RCH1MT953H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
