import { doc, deleteDoc } from "firebase/firestore"; 
import  db  from '../firebase/firebase-config';

async function DeleteSong(documentId) {
  await deleteDoc(doc(db, "songs", documentId));
}

export default DeleteSong