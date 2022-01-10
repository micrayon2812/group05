import React from 'react'
import {database} from "../Database/Firebase";
import { useState } from 'react';
function Entertainment() {
    const [info , setInfo] = useState([]);

    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    const Fetchdata = ()=>{
        database.collection("Entertainment").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    }
    return (
        <div>
        <center>
        <h2>Book Details</h2>
        </center>
      
    {
        info.map((data) => (
        <Frame Name={data.Name} 
               Author={data.Author} 
               Buy={data.Buy}/>
        ))
    }
    </div>
    )
}
const Frame = ({Name , Author , Buy}) => {
    console.log(Name + " " + Author + " " + Buy);
    return (
        <center>
            <div className="div">
                  
<p>NAME : {Name}</p>
   
                  
<p>Author : {Author}</p>
  
                  
<p>Buy : {Buy}</p>
   
            </div>
        </center>
    );
}
export default Entertainment
