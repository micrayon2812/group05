import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import useFirestore from "./hooks/useFirestore";

const Category = () => {
    const { category } = useParams();

    const { docs } = useFirestore(category);
    console.log("docs", docs);

    return (
        <div className="img-grid">

            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <a href={`/Book/${doc.id}`}><img src={doc.Cover} alt="uploaded pic" /></a>
                </div>
            ))}

        </div>
    )
}

export default Category;