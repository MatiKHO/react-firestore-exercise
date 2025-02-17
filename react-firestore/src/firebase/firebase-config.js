import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_yIxasPNlu1-uUOK1YmtkfY8CTMeBUg4",
  authDomain: "songify.firebaseapp.com",
  projectId: "songify-e8dab",
  appId: "664210589925"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db;
