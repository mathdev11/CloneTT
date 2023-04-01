import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCX_kbEwveYTfr5UVrs71AUE3hRiXY8GGk",
  authDomain: "clonett-2e368.firebaseapp.com",
  projectId: "clonett-2e368",
  storageBucket: "clonett-2e368.appspot.com",
  messagingSenderId: "714877522984",
  appId: "1:714877522984:web:3e90ff9949a29ae779511d"
};

const app = initializeApp(firebaseConfig);   
const db = getFirestore(app);

export default db;
