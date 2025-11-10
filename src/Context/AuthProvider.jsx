import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

export const Authcontext =createContext()

const AuthProvider=({children})=>{
const [user,setUser]=useState()
const [loading,setLoading]=useState(false)
    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const sininuser=(email,password)=>{
            setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    const logout=()=>{
          setLoading(true)
          return signOut(auth)
    }
    const provider = new GoogleAuthProvider();
    const googlelogin=()=>{
return signInWithPopup(auth,provider)
    }


  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };



    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        })
        return()=>{
            unsubcribe()
        }
    },[])

    const authinfo={
 creatUser,
user,
loading,sininuser,logout,googlelogin,resetPassword
    }
    return (
        <Authcontext.Provider value={authinfo} >{children}</Authcontext.Provider>
    );
};

export default AuthProvider;

