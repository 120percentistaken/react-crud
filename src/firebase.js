import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgZEqiuolPUSRZQEoRpf2qdwgDy0yt8D4",
    authDomain: "react-firebase-cf9d3.firebaseapp.com",
    projectId: "react-firebase-cf9d3",
    storageBucket: "react-firebase-cf9d3.appspot.com",
    messagingSenderId: "885250577656",
    appId: "1:885250577656:web:5ad5fd8158340b02f0970d"
  };

  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);