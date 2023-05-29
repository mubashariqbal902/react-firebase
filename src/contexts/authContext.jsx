import { createContext, useState } from "react";

export const AuthContext = createContext()


const AuthContextProvider = ({children})=>{
    const [auth,setAuth]=useState(null)
    const values = {
        auth,setAuth
    }
    return (
        <AuthContext.Provider value={{...values}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider