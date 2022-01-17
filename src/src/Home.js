import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import Background from "./img/5208116.jpg";
import "./Page.css";
import Navbar from "./Navbar";
import useFirestore1 from './hooks/useFirestore1';
import { database } from "./Database/Firebase";
import { useState } from "react";

function Home() {
  const a = useFirestore1('Books');

  const search = () => {
    var s;
    if (document.getElementById("txtname") != null) { s = document.getElementById("txtname").value; }
    else { s = null; }
    console.log("s", s);
    database
      .collection("Books")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          if (data.Name == s) {
            var str = window.location.href;
            var strdelete = str.substring(str.indexOf("/") + 1);
            var string = str.replace('/' + strdelete, '') + '/books-' + element.id;
            console.log("string", string);
            window.open(string, "_blank");
          }
        });
      });
  }
  return (
    <body>
      <Navbar />
      <div style={{
        backgroundImage: `url(${Background})`, backgroundSize: `100%`, backgroundRepeat: `no-repeat`, height: '370px'
      }}>
        <h3 className='title' style={{ color: 'black', paddingTop: `6%`, paddingLeft: `32%`, fontSize: `53px` }}>Free books for everyone</h3>
        <h2 className='title' style={{ color: 'black', paddingTop: `0%`, paddingLeft: `36.5%`, fontSize: `38px` }}>Find books and reviews</h2>
        <div class="input-group bg-img fade" style={{ paddingTop: `1%`, paddingLeft: `23%`, paddingRight: `23%`, }}>
          <input id="txtname" type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
          {/* <a type="button" class="btn btn-outline-home" href="#">search</a> */}
          <button type="button" className='btn btn-outline-home' onClick={search}>Search</button>
        </div>
      </div>
      <div className='padd'>
        <div className="img-grid1">
          {a.docs && a.docs.map(doc => (
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
