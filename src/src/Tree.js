import React from "react";

function Tree({image, name, price}) {
    return (
    <div className="tree">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
    )
}

export default Tree
