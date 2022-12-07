import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore, Timestamp} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAn8sEM_OIPrXouiSYM6AuIfTjLDwaxJcE",
  authDomain: "app360-grupo-sentinel.firebaseapp.com",
  projectId: "app360-grupo-sentinel",
  storageBucket: "app360-grupo-sentinel.appspot.com",
  messagingSenderId: "1033807425450",
  appId: "1:1033807425450:web:a43fdcb4f4419813a205d3"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export {Timestamp};