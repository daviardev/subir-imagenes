// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);

export { app }