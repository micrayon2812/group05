import { useState, useEffect } from "react";
import { database } from "../Database/Firebase";

const useFirestore1 = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = database
            .collection("Books")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
            });
        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore1;