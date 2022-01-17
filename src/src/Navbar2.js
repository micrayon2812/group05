import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import logo from "./img/logo.png"
import { database } from "./Database/Firebase";
import "./Navbar.css";

function Navbar2() {
  const icon = { color: "#2833ad", fontSize: "1.5em" }
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
    <div>
      <nav class="navbar navbar-dark navbar-expand p-0 bg-dark " ></nav>
      <section class="header-main border-bottom bg-white ">
        <div class="container-fluid">
          <div class="row p-2 pt-2 pb-3 d-flex align-items-center">
            <div class="col-md-2" style={{ paddingLeft: `0px` }}>
              <a class="navbar-brand mr-4" href="/Home"><img src={logo} width="200px" /></a>
            </div>
            <div class="col-xl-9">
              <div class="d-flex form-inputs">

                <input
                  id="txtname"
                  class="form-control"
                  type="text"
                  placeholder="Search any book..."
                />
                <button className="logosearch" type="button" onClick={search}>
                  <BiSearchAlt size="30px" style={{ alignItems: "center", textAlign: "center", paddingTop: `5px` }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>
      </h1>
    </div>
  );
}

export default Navbar2;
