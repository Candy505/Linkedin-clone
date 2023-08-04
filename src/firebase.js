import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXvwg-BOe8T7tfwDU6VzOkwOr4THdDBog",
  authDomain: "linkedin-clone-d5359.firebaseapp.com",
  projectId: "linkedin-clone-d5359",
  storageBucket: "linkedin-clone-d5359.appspot.com",
  messagingSenderId: "437981622378",
  appId: "1:437981622378:web:88f060956f01651cc49a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage =  getStorage(app);