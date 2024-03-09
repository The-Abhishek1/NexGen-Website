import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDue3mckqQeazkeiSOtT932RyWV7Y3hE9s",
  authDomain: "nexgen-website-23631.firebaseapp.com",
  projectId: "nexgen-website-23631",
  storageBucket: "nexgen-website-23631.appspot.com",
  messagingSenderId: "283912975485",
  appId: "1:283912975485:web:6d9cb3a14c1dc35faa6d14",
  measurementId: "G-245MMZM78N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
