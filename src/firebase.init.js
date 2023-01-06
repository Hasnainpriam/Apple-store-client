// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5fymTwhqOaecD5YOKxvx6eH4157pGF_c",
  authDomain: "apple-store-cd591.firebaseapp.com",
  projectId: "apple-store-cd591",
  storageBucket: "apple-store-cd591.appspot.com",
  messagingSenderId: "6589209860",
  appId: "1:6589209860:web:baa76a55159dcd196fc451"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;