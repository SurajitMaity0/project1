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
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    });

    return(
        <AuthContext.Provider value={{createUser, user}}>
            {children}
        </AuthContext.Provider>
    )
};
