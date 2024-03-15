// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqP0FXobDTRBDD9jyRZz8IjvpxNQ_pyYk",
  authDomain: "mcq-platform-f78b1.firebaseapp.com",
  projectId: "mcq-platform-f78b1",
  storageBucket: "mcq-platform-f78b1.appspot.com",
  messagingSenderId: "237414820083",
  appId: "1:237414820083:web:ab48676dcd1110dde1af86",
  measurementId: "G-5H89LK211G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)