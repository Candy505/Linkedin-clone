import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlHf3ypk2JISluQ3WUk2NeO8Xa3dVb4NI",
  authDomain: "linkedin-dc980.firebaseapp.com",
  databaseURL: "https://linkedin-dc980-default-rtdb.firebaseio.com",
  projectId: "linkedin-dc980",
  storageBucket: "linkedin-dc980.appspot.com",
  messagingSenderId: "1085168005440",
  appId: "1:1085168005440:web:f89058d4e3104214b5caa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


