// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDlwMkDsPKLuHbFQArDD2VNcSC-wxmaotw",

  authDomain: "linkedin-clone-ad377.firebaseapp.com",

  projectId: "linkedin-clone-ad377",

  storageBucket: "linkedin-clone-ad377.appspot.com",

  messagingSenderId: "1086106876141",

  appId: "1:1086106876141:web:60c9b5bcf7483d08d674e4",

  measurementId: "G-8M39EX01L0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// const analytics = getAnalytics(app);

export { auth, app }