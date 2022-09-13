import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgWoeSPzz34S0Do9wyTSBmYHm2IDMyq48",
  authDomain: "crown-clothing-db-11ef7.firebaseapp.com",
  projectId: "crown-clothing-db-11ef7",
  storageBucket: "crown-clothing-db-11ef7.appspot.com",
  messagingSenderId: "475774590400",
  appId: "1:475774590400:web:8b093705202288782ebc25",
};

initializeApp(firebaseConfig);

//Getting Google Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//Getting Auth
export const auth = getAuth();

//SignIn Methods
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//SignUp Methods
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

//Database Configuration
export const db = getFirestore();

//Adding the User into Database
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    });
  }
};
