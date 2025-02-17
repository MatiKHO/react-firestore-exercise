import { collection, addDoc } from "firebase/firestore";
import  db  from  "../firebase/firebase-config";

const PostSong = async (data) => {
    if (!db) {
        console.error("Firestore database is not initialized");
        return;
    };

    try {

        const newSongsCollection = collection(db, "songs");
        const querySnapshot = await addDoc(newSongsCollection, {...data});



    } catch (error) {
        console.error("Error creating the post, ID: ", error);
       
    };
};

export default PostSong;