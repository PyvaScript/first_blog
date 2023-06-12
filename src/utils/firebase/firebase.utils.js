import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from 'firebase/firestore';

const firebaseConfig={
    apiKey:"AIzaSyArIOFInbtG1z5WjJU4zjPiPaYU5Rx0Sug",
    authDomain:"first-blog-da7c2.firebaseapp.com",
    projectId:"first-blog-da7c2",
    storageBucket:"first-blog-da7c2.appspot.com",
    messagingSenderId:"377501416491",
    appId:"1:377501416491:web:ce94fd2ff1e20527367e6e",
    measurementId:"G-P6DW6H8BS0"
}

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const analytics=getAnalytics(app)

const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, provider);
//db is a signleton which points directly to the database in our console.
export const db=getFirestore();
export const createUserDocumentFromAuth=async(userAuth, additionalInformation)=>{
    if(!userAuth) return;
    console.log("userAuth in firebase.utils - ",userAuth);
    const userDocRef=doc(db,"users",userAuth.uid);
    console.log("userDocRef - ",userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log("userSnapshot - ",userSnapshot);
    console.log("Exists - ",userSnapshot.exists());
    if(!userSnapshot.exists()){
        try{
            const { displayName, email }=userAuth;
            const createdAt=new Date();
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch(error){
            console.log("Error on user creation - ",error.message);
        }
    };
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email||!password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser=async()=>signOut(auth);

export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback);

