import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    getFirestore,
    collection,
    writeBatch,
    doc,
    query,
    getDoc,
    getDocs,
    setDoc,
} from "firebase/firestore";

const firebaseConfig={
    apiKey:"AIzaSyArIOFInbtG1z5WjJU4zjPiPaYU5Rx0Sug",
    authDomain:"first-blog-da7c2.firebaseapp.com",
    projectId:"first-blog-da7c2",
    storageBucket:"first-blog-da7c2.appspot.com",
    messagingSenderId:"377501416491",
    appId:"1:377501416491:web:ce94fd2ff1e20527367e6e",
    measurementId:"G-P6DW6H8BS0"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);

const analytics=getAnalytics(app);

const google_provider=new GoogleAuthProvider();
google_provider.setCustomParameters({
    prompt:'select_account',
});

export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth, google_provider);

export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, google_provider);

//db is a singleton which points directly to the database in our console.
export const db=getFirestore();

export const addCollectionAndDocuments=async(collectionKey, documentsToAdd)=>{
    const collectionRef=collection(db, collectionKey);
    const batch=writeBatch(db);

    documentsToAdd.forEach((document)=>{
        const docRef=doc(collectionRef, document.title);
        batch.set(docRef, document);
    });

    await batch.commit();
    console.log("Batch has been set commited");
};

export const getCategoriesAndDocuments=async()=>{
    const collectionRef=collection(db, 'categories');
    const q=query(collectionRef);

    const querySnapShot=await getDocs(q);
    return querySnapShot.docs.map((docSnapShot)=>docSnapShot.data());
};

export const createUserDocumentFromAuth=async(userAuth, additionalInformation)=>{
    if(!userAuth) return;
    const userDocRef=doc(db, 'users', userAuth.uid);
    const userSnapshot=await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        try {
            const { displayName, email } =userAuth;
            const createdAt=new Date();
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch(error) {
            console.error('Error on user creation - ',error.message);
        };
    };
    return userSnapshot;
};

export const createAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser=async()=>await signOut(auth);

export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth, callback);

export const getCurrentUser=()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe=onAuthStateChanged(
            auth, (userAuth)=>{
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });
};

// export const getCategoriesAndDocuments=async()=>{
//     const collectionRef=collection(db, 'categories');
//     const q=query(collectionRef);

//     const querySnapshot=await getDocs(q);
//     const categoryMap=querySnapshot.docs.reduce((acc, docSnapshot)=>{
//         const { title, items }=docSnapshot.data();
//         acc[ title ]=items;
//         return acc;
//     },{});

//     return categoryMap;
// };
