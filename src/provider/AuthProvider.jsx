import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe();
        }
    },[])
    const logOut =() =>{
        return signOut(auth)
    }

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;