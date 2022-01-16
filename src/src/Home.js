import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import Background from "./img/5208116.jpg"
import "./Page.css";
import Navbar from "./Navbar";
import useFirestore1 from './hooks/useFirestore1';

function Home() {
  const { docs } = useFirestore1('Books');
  console.log("docs", docs);

  return (

    <body>
      <div style={{
        backgroundImage: `url(${Background})`, backgroundSize: `100%`, backgroundRepeat: `no-repeat`, height: '370px'
      }}>
        <h3 style={{ color: 'purple', paddingTop: `6%`, paddingLeft: `37%`, paddingRight: `38%`,fontSize:`40px` }}>What are you reading?</h3>
        <div class="input-group bg-img fade" style={{ paddingTop: `2%`, paddingLeft: `35%`, paddingRight: `35%`, }}>
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
          <a type="button" class="btn btn-outline-home" href="/Aboutus">search</a> </div>
      </div>
      <div className='padd'>
        <div className="img-grid1">
          {docs && docs.map(doc => (
            <div>
              <div className="img-wrap1" key={doc.id}>
                <a href={`/books-${doc.id}`}><img src={doc.Cover} alt="uploaded pic" /></a>
              </div>
              <div className='text'>
                <a href={`/books-${doc.id}`} > {doc.Name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </body >
  )
}

export default Home
