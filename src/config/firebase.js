import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnsRvnzI0V-ggQsDOZwNpdXgDP8De9zXw",
    authDomain: "let-s-get-dressed.firebaseapp.com",
    projectId: "let-s-get-dressed",
    storageBucket: "let-s-get-dressed.appspot.com",
    messagingSenderId: "246344300201",
    appId: "1:246344300201:web:8f595a4b1ed07e85abdbb8",
    measurementId: "G-LY3VNTHR8R"
  };
  

  const app = initializeApp(firebaseConfig);   
  export const db = getFirestore(app)
  const auth = getAuth(app);

