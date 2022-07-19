import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2n8JhYQV3w1vYUtA14G-1821VN-2bty4",
  authDomain: "disney-clone-af677.firebaseapp.com",
  projectId: "disney-clone-af677",
  storageBucket: "disney-clone-af677.appspot.com",
  messagingSenderId: "491937424877",
  appId: "1:491937424877:web:e2b2e9db6604a2c732b3e4",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const storage = getStorage(firebaseApp);

export { auth, storage };
export default db;
