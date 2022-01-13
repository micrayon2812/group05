import React from "react";
import useFirestore from "../hooks/useFirestore";

const ArtsMusic = () => {
    const { docs } = useFirestore('Art&Music');
    console.log(docs);

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}

export default ArtsMusic;