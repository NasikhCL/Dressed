import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAt5XVw04lxKmNBY-eHNxd7p-jz7kd8yVY",
  authDomain: "dressed-123.firebaseapp.com",
  projectId: "dressed-123",
  storageBucket: "dressed-123.appspot.com",
  messagingSenderId: "316267562696",
  appId: "1:316267562696:web:ae3ff2d020ba829b5c87fd",
  measurementId: "G-XBBPDHKRN0"
  };
  

  const app = initializeApp(firebaseConfig);   
  export const db = getFirestore(app)
  const auth = getAuth(app);
