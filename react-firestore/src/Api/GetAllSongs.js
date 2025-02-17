import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase-config";

const GetAllSongs = async () => {
  if (!db) {
    console.error("Firebase database is not initialized!");
    return;
  }

  try {
    const songsCollection = collection(db, "songs");
    const querySnapshot = await getDocs(songsCollection);
    const songs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return songs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default GetAllSongs;
