import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";
const firebaseConfig = {
  apiKey: "AIzaSyArkxePg54OisoEfwZLKq-leMJEc1o9z_8",
  authDomain: "clothing-app-a0494.firebaseapp.com",
  projectId: "clothing-app-a0494",
  storageBucket: "clothing-app-a0494.appspot.com",
  messagingSenderId: "279495339222",
  appId: "1:279495339222:web:4afc262a3254ce797e6d77",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export type ObjectsToAdd = {
  title: string;
};

export const addCollectionsAndDocuments = async <T extends ObjectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("data added to cloud Firestore storage");
};

export const getDocumentsAndDataFromCollection = async (
  collectionKey: string
): Promise<Category[]> => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
  // const categoryMap = querySnapShot.docs.reduce((accumulatorObject, docSnapShot) => {
  //     const { title, items } = docSnapShot.data();
  //     accumulatorObject[title.toLowerCase()] = items;
  //     return accumulatorObject;
  // }, {});

  // return categoryMap;
};
export type Additioninfo={
    displayName?:string;
}

export type UserData = {
    email:string;
    createdAt: Date;
    displayName: string;
}

export const createUserDocumentfromAuth = async (
  userAuth: User,
  additioninfo = {} as Additioninfo
): Promise<void| QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnapShot = await getDoc(userDocRef);
  if (!userDocSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additioninfo,
      });
    } catch (error) {
      console.log("error at fetching user" + error);
    }
  }
  return userDocSnapShot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User| null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
