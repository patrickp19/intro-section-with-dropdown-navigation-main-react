import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect, // redirects don't save state between refreshes so can't use the same method as GooglePopup. Instead we will store auth states in auth singleton
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  // on mount useEffect will run once and look for the response from Redirect
  useEffect(() => {
    // create async function inside UseEffect
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      console.log("redirect response", response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    // call async function
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
