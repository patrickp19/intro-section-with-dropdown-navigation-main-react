import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  // doc returns a doc instance (userDocRef)
  doc,
  // getDoc returns a snapshot which gives us access to features such as checking whether the doc exists in the collection
  // setDoc is used for editing data in the collection through passing in the corresponding userDocRef
  getDoc,
  setDoc,
} from "firebase/firestore";

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

// auth singleton keeps track of authentication state of the entire application
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  // creates userDocRef matching [collection and uid]

  // this returns a userDocRef even if a snapshot does not exist on the database. Allows new data to be set at specific UID even if the UID does not exist yet
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("check if userSnapshot exists", userSnapshot.exists());

  // check is userSnapshot (data) exists in firebase and creates a new collection on firebase if not
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        // allows us to handle data we sometimes receive
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  // this userauth method does not require a username on creation therefore we will need to update the username field ourselves in the signup component when updating to firebase
  return await createUserWithEmailAndPassword(auth, email, password);
};
