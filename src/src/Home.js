import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
import Background from "./img/halloween-wallpaper-with-cemetery-night.jpg"
import "./Page.css";

function Home() {

    return (
      
<body  > 
  <div  style={{backgroundImage: `url(${Background})`,  backgroundSize: `100%`, backgroundRepeat:`no-repeat`,  height:'370px' 
}}>
  <h3 style={{color:'white', paddingTop:`6%`,paddingLeft:`40%`, paddingRight:`35%`}}>What are you reading?</h3>
    <div class="input-group bg-img fade"  style={{paddingTop:`2%`,paddingLeft:`35%`, paddingRight:`35%`,}}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
  <a type="button" class="btn btn-outline-home" href="/Aboutus">search</a> </div>
  </div>

  </body>
)
}

export default Home
