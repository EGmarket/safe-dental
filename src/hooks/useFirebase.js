import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, FacebookAuthProvider,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendEmailVerification, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Sign In Using Email and Password
    const processLogin = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          setUser(user)
          console.log(user);
        })
        .catch(error => {
          console.log(error.message);
        })
      }

      // Create user
      const createNewUser = (email , password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          sendEmailVerification(auth.currentUser)
          .then(result =>{
            console.log(result);
          })
        })
        .catch(error =>{
          console.log(error.message);
        })
       
      }
    //Sign In With Google
    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message)
        })
    }

    // Sign In With Github
    const signInUsingGitHub = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message)
        })
    }
    // Sign In with Facebook
    const signInUsingFacebook = () =>{
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user)
        })
    }

    const logout = () => {
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGitHub,
        signInUsingFacebook,
        processLogin,
        createNewUser,
        logout
    }
}

export default useFirebase;