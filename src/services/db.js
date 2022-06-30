// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdw1M0L_0spc3d__Yrb56kl4lJ1MfTIFc",
  authDomain: "db-realacordeon.firebaseapp.com",
  projectId: "db-realacordeon",
  storageBucket: "db-realacordeon.appspot.com",
  messagingSenderId: "700400040809",
  appId: "1:700400040809:web:f89cd6a529b39ede75dbf8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const dbStorage = firebase.storage()
const dbFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { dbStorage, dbFirestore, timeStamp }