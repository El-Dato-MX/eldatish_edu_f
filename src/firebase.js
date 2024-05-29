// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuKmxyPBEXmziSNxVUPnmFCQG7TuN3OfU",
  authDomain: "test-everything-400123.firebaseapp.com",
  projectId: "test-everything-400123",
  storageBucket: "test-everything-400123.appspot.com",
  messagingSenderId: "802002880521",
  appId: "1:802002880521:web:5928ae8343faf2c1fa50d8",
  measurementId: "G-PRLT7BL1EM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

