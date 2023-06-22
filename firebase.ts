// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ5wq4fPJIoQVuUKqejc_7GDZaTXeAxsg",
  authDomain: "netflix-b5a24.firebaseapp.com",
  projectId: "netflix-b5a24",
  storageBucket: "netflix-b5a24.appspot.com",
  messagingSenderId: "1050809365457",
  appId: "1:1050809365457:web:10610d65f27b5e2682e6f0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }