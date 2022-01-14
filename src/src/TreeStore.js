import React from "react";
import {TreeList} from "./TreeList";
import Tree from "./Tree";
import "./TreeStore.css"


function TreeStore() {
    return (
        <div className="treeStore">
            <h1 className="treeStoreName">Tree Store</h1>
            <div className="treeList">
                {TreeList.map((tree, key) => {
                return (
                    <Tree
                    key={key}
                    image={tree.image}
                    name={tree.name}
                    price={tree.price}
                    />
                );
                })}
            </div>
        </div>
    )
}

export default TreeStore
