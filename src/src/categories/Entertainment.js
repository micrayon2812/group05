import React from "react";
import useFirestore from "../hooks/useFirestore";

const Entertainment = () => {
    const { docs } = useFirestore('Entertainment');
    console.log(docs);

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <a href="#"><img src={doc.Cover} alt="uploaded pic" /></a>
                </div>
            ))}
        </div>
    )
}

export default Entertainment;