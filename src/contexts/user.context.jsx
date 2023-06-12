import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils.js';

export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

export const UserProvider=({ children })=>{
    const [ currentUser, setCurrentUser ]=useState(null);
    useEffect(()=>{
        const unsubscribe=onAuthStateChangedListener(()=>{})
        return unsubscribe
    },[]);
    const value={ currentUser, setCurrentUser };
    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
};
