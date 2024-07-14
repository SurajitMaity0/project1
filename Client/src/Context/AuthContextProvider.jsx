import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import { auth } from '../firebase/config';

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const createUser = (email, password) => {
        const newUser =  createUserWithEmailAndPassword(auth, email, password);
        setUser(newUser);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    });

    return(
        <AuthContext.Provider value={{ user, logOut, signIn, createUser }}>
            {children}
        </AuthContext.Provider>
    )
};
