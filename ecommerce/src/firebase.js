import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBLPwAPCO5VawbpQr1l7TW0R6nYfDLWHic",
    authDomain: "acehacks-d0fd5.firebaseapp.com",
    projectId: "acehacks-d0fd5",
    storageBucket: "acehacks-d0fd5.appspot.com",
    messagingSenderId: "938906704681",
    appId: "1:938906704681:web:365aa608c9ccc75241b538",
    measurementId: "G-WFF3HWQ2ZF"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile }
export default db;