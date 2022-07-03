import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdw1M0L_0spc3d__Yrb56kl4lJ1MfTIFc",
  authDomain: "db-realacordeon.firebaseapp.com",
  projectId: "db-realacordeon",
  storageBucket: "db-realacordeon.appspot.com",
  messagingSenderId: "700400040809",
  appId: "1:700400040809:web:f89cd6a529b39ede75dbf8"
};

firebase.initializeApp(firebaseConfig);

let dbStorage = firebase.storage();
let dbFirestore = firebase.firestore();
let timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { dbStorage, dbFirestore, timeStamp }