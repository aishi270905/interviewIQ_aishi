
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-68f54.firebaseapp.com",
  projectId: "interviewiq-68f54",
  storageBucket: "interviewiq-68f54.firebasestorage.app",
  messagingSenderId: "496215618548",
  appId: "1:496215618548:web:05313a80a61ef88adebfa1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider};