// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8xYDnFPSN3BHPcAoHOseld6B9QHuTGU4",
  authDomain: "instagramclone-771c7.firebaseapp.com",
  projectId: "instagramclone-771c7",
  storageBucket: "instagramclone-771c7.appspot.com",
  messagingSenderId: "875296336191",
  appId: "1:875296336191:web:41a22ca80da417f751cb8a",
  measurementId: "G-XCX4DPZ5JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Auth
const auth = getAuth();

export {auth,signInWithEmailAndPassword,createUserWithEmailAndPassword }