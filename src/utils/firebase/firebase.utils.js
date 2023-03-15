import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithReddirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMbEKUHcsDEv8jM_7zoNfzSZZ-XV1oQA",
  authDomain: "intro-section-with-dropdown.firebaseapp.com",
  projectId: "intro-section-with-dropdown",
  storageBucket: "intro-section-with-dropdown.appspot.com",
  messagingSenderId: "76316527980",
  appId: "1:76316527980:web:4f8d54d390a36015157749",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
