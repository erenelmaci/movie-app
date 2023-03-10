// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdtysYqJCQK_LoT3g4oh_D6A01ajcdge0",
  authDomain: "movie-app-c7693.firebaseapp.com",
  projectId: "movie-app-c7693",
  storageBucket: "movie-app-c7693.appspot.com",
  messagingSenderId: "751973066840",
  appId: "1:751973066840:web:ca57bf29b3886b71b1c22d",
  measurementId: "G-J6RB6TH2SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)