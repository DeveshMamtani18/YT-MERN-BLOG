import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn("VITE_FIREBASE_API"),
    authDomain: "mern-blog-eec57.firebaseapp.com",
    projectId: "mern-blog-eec57",
    storageBucket: "mern-blog-eec57.firebasestorage.app",
    messagingSenderId: "92101766309",
    appId: "1:92101766309:web:fdeda6e8dd704e2505714c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }