import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import React from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.js";
import SignUp from "../../components/sign-up/Sign-Up.jsx";

const SignIn = () => {
  useEffect(() => {
    async function fetchData() {
      const response = getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
