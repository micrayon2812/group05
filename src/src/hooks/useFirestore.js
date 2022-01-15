import { useState, useEffect } from "react";
import { projectFirestore } from "../Dataset/Firebase";
import { categoryNames } from "../constants/categories";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore
            .collection("Books")
            .where("Category", "==", categoryNames[collection])
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

export default useFirestore;