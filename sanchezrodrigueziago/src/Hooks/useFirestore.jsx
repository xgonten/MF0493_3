import { collection, addDoc, deleteDoc, doc ,getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebase";



export async function insertDB(d , i , t) {
    console.log(d,i,t)
    try {
        const docRef = await addDoc(collection(db, "experiencias"), {
            desc: d,
            img: i,
            titulo: t
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getDocumentos () {
    let tmp = []
    const querySnapshot = await getDocs(collection(db, "experiencias"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        tmp.push({
            id: doc.id,
            data: doc.data()
        });
    })
    return tmp
}
export async function deleteFromDB (id) {

    await deleteDoc(doc(db, "experiencias", id));

}