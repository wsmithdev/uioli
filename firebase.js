// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4AH22iqhzTiBVk49IlE9OyXyGk042RNE",
  authDomain: "use-it-or-lose-it-c8743.firebaseapp.com",
  projectId: "use-it-or-lose-it-c8743",
  storageBucket: "use-it-or-lose-it-c8743.appspot.com",
  messagingSenderId: "959492494473",
  appId: "1:959492494473:web:cf0550aef9ee27bf6b6258"
};


// Initialize App
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth();

// Database
const db = getFirestore();

export { auth, db }