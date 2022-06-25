// -> Importaciones de librerias <- //
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDSQCktcD-zD_KMi_brLUXCUdCZpq29O3c",
  authDomain: "proyecto-1-vite.firebaseapp.com",
  projectId: "proyecto-1-vite",
  storageBucket: "proyecto-1-vite.appspot.com",
  messagingSenderId: "513904338832",
  appId: "1:513904338832:web:5dcf11d5e1fe39b6c1b515",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {auth, db};
