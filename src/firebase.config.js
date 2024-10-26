// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAIMh84CfjcVlf1scb6MyyfY7L3N1cChM",
  authDomain: "alpha-team-d351d.firebaseapp.com",
  databaseURL: "https://alpha-team-d351d-default-rtdb.firebaseio.com",
  projectId: "alpha-team-d351d",
  storageBucket: "alpha-team-d351d.appspot.com",
  messagingSenderId: "400885427687",
  appId: "1:400885427687:web:3ce64941254b3c4c33e142",
  measurementId: "G-3SEGNB6J28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app