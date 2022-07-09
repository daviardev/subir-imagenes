import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdw1M0L_0spc3d__Yrb56kl4lJ1MfTIFc",
  authDomain: "db-realacordeon.firebaseapp.com",
  projectId: "db-realacordeon",
  storageBucket: "db-realacordeon.appspot.com",
  messagingSenderId: "700400040809",
  appId: "1:700400040809:web:f89cd6a529b39ede75dbf8"
};

let app = initializeApp(firebaseConfig);

export let dbStorage = getStorage(app);