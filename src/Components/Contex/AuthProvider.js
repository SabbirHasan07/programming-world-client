import React from 'react';
import { createContext } from 'react';
import   {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [themeDark, setThemeDark] = useState(true);


    const loginProvider =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);

    }
    const githubProvider =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateProfileuser = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log('inside auth state change', currentUser);
            if(currentUser === null || currentUser.uid){
                setUser(currentUser);
            }
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])




    const authInfo = { githubProvider,createUser ,signIn,loginProvider,user,loading,setLoading,logOut,updateProfileuser,themeDark, setThemeDark}
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;