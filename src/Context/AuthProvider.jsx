
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sininuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const provider = new GoogleAuthProvider();
  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
const updateUserProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);


  const authinfo = {
    creatUser,
    user,
    setUser,       
    loading,
    sininuser,
    logout,
    googlelogin,
    resetPassword,
    setLoading,updateUserProfile 
  };

  return (
    <Authcontext.Provider value={authinfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
