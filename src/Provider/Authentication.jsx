import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext=createContext(null);

// eslint-disable-next-line react/prop-types
const Authentication = ( { children }) => {

    const SignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
 const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 }
  const [user,setUser]=useState(null)
  useEffect(()=>{
      const unSubscribe= onAuthStateChanged(auth, (current) => {
        setUser(current)
    })
    return()=>{
        unSubscribe()
    }
  }, [])
   
   const signOutUser=()=>{
    signOut(auth)
   }
    const AuthValue={
      SignUp,
      login,
      user,
      signOutUser

    }
    return (
       <AuthContext.Provider value={AuthValue}>
        {children}
        </AuthContext.Provider>
    );
};

export default Authentication;