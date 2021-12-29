import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import logo from "./img/logo.png"
function Navbar2() {
    const icon = { color: "#2833ad", fontSize: "1.5em" }

  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand p-0 bg-dark " ></nav>
      <section class="header-main border-bottom bg-white ">
        <div class="container-fluid">
          <div class="row p-2 pt-2 pb-3 d-flex align-items-center">
            <div class="col-md-2"  style= {{paddingLeft:`0px`}}>
            <a class="navbar-brand mr-4" href="/Home"><img src={logo} width="200px" /></a>
            </div>
            <div class="col-xl-9">
              <div class="d-flex form-inputs">
        
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search any book..."
                />
                <a href="./Category">
                <BiSearchAlt size="50px" style={{ padding: `10px` }} />

                </a>
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
