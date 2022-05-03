import { initializeApp } from "firebase/app";
import { onAuthStateChanged,signOut,GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyArkxePg54OisoEfwZLKq-leMJEc1o9z_8",
    authDomain: "clothing-app-a0494.firebaseapp.com",
    projectId: "clothing-app-a0494",
    storageBucket: "clothing-app-a0494.appspot.com",
    messagingSenderId: "279495339222",
    appId: "1:279495339222:web:4afc262a3254ce797e6d77"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentfromAuth = async (userAuth,additioninfo={}) => {
    if(!userAuth){
        return;
    }
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userDocSnapShot = await getDoc(userDocRef);
    if (!userDocSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt,...additioninfo });
        } catch (error) {
            console.log("error at fetching user" + error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);