import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebaseConfig/firebase.confiq';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const logOut = () => {
        return signOut(auth)
    };

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOut
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, signedUser => {
            setUser(signedUser);
            setLoading(false)
        });
        return ()=> {
            unsubscribe()
        }
    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;