// Firebase v9 configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDbbcqmR2xTbTyD1lvP6tkYyBOMFb-xsE4",
    authDomain: "instagram-clong.firebaseapp.com",
    projectId: "instagram-clong",
    storageBucket: "instagram-clong.appspot.com",
    messagingSenderId: "688326786641",
    appId: "1:688326786641:web:d8aad5b25c57634e2fc270"
  });

 //  bring access to db, authentification and storage
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);

export {db, auth, storage};