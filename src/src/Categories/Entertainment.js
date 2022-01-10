import React from 'react'
import {database} from "../Database/Firebase";
import { useState } from 'react';
import './View.css'
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
    //     <div>
    //     <center>
    //     <h2>Book Details</h2>
    //     </center>
      
    // {
    //     info.map((data) => (
    //     <Frame Name={data.Name} 
    //            Author={data.Author} 
    //            Buy={data.Buy}/>
    //     ))
    // }
    // </div>

<div class="container" >
  <div class="row row-cols-auto">

{
        info.map((data) => (
        <Frame Name={data.Name} 
               Author={data.Author} 
               Des={data.Des}
               Ebook={data.Ebook}
               Buy={data.Buy}
               Cover={data.Cover}
               />
        ))
    }
 </div>
 </div>
    )
}
const Frame = ({Name , Author ,Des,Ebook, Buy,Cover}) => {
    console.log(Name + " " + Author + " " +  Des + " " +" " + Ebook+" " + Buy+" " +Cover);
    return (
<div className='col'>
<img src={Cover} alt="Avatar" class="image"  />
<div class="middle">
  <div class="text">John Doe</div>
</div>
</div>
    );
}
export default Entertainment
