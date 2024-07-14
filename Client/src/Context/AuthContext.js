import { createContext, useContext } from 'react';

export const AuthContext = createContext();

 export const UserAuth = () => {
    return useContext(AuthContext)
 }
