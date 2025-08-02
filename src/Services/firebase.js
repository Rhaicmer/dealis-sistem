// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // <-- ADICIONE ISSO

const firebaseConfig = {
  apiKey: "AIzaSyASk_7lISLzLyFc-CoEhd_ckNTLbSCYwoo",
  authDomain: "doc-entrepises.firebaseapp.com",
  projectId: "doc-entrepises",
  storageBucket: "doc-entrepises.firebasestorage.app",
  messagingSenderId: "1081367314208",
  appId: "1:1081367314208:web:b6473ef8d1d31f34366145",
  measurementId: "G-8RBZ9MJMD2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 

