import React,{createContext, useState} from 'react'

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const [loginUser, setLoginUser] = useState();
    return (
        <>
        <authContext.Provider value={{loginUser, setLoginUser}}>
        {children}
        </authContext.Provider>
        </>
    )
}

export default AuthProvider