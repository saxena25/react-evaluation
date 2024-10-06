import {createContext, useState} from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}){

    const [formState,setFormState] = useState({})


    return(
        <AuthContext.Provider value={{formState,setFormState}}>
            {children}
        </AuthContext.Provider>
    )
    
    
}