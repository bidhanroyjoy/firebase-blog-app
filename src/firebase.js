import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjsJrwf9he9iBIWzO3r9u9QA0uo65GPt4",
    authDomain: "blog-app-42597.firebaseapp.com",
    projectId: "blog-app-42597",
    storageBucket: "blog-app-42597.appspot.com",
    messagingSenderId: "238151823696",
    appId: "1:238151823696:web:8aaa119253ee90e2967c55"
  };

  const app= initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getFirestore(app);
  const storage=getStorage(app);

  export { auth,db,storage };