import React from "react";
import "./Profile.css";

import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { database } from "../Database/Firebase";
import { useState } from "react";

function ProfileEdit() {
  const [info, setInfo] = useState([]);
  const[Name,setName]=useState("");
  const[Age,setAge]=useState("");
  const[Profess,setProfess]=useState("");
  const[Phone,setPhone]=useState("");
  const user = auth.currentUser;
  GetInfo(user.email);

  function GetInfo(usermail) {
    database
      .collection("User")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          if (data.email == usermail) {
            setInfo(data);
          }
        });
      });
  }
  const UpdateInfo = (e,usermail) => {
    e.preventDefault();
    database
    .collection("User")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((element) => {
        var data = element.data();
        var id =element.id;
        if (data.email == usermail) {
          database.collection("User").doc(id).update({
            name: Name,
            age: Age,
            phone:Phone,
            profession:Profess
          }
          )
          .then((docRef) => {
            alert("Update Info Successfully");
          })
          .catch((error) => {
            console.error("Error Update Info: ", error);
          });
        }
      });
    });
    // database
    //   .collection("User")
    //   .document(auth.currentUser.uid)
    //   .update(updatedata)
      // .then((docRef) => {
      //   alert("Update Info Successfully");
      // })
      // .catch((error) => {
      //   console.error("Error Update Info: ", error);
      // });
    
  }
  return (
    <div class="container emp-profile">
        <div class="row" >
          <div class="col-md-4">
            <div class="profile-img">
              <img src={info.avatar} alt="" />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6"   >
            <div class="profile-head">
              <h5>{info.name}</h5>
              <h6>User</h6>
              <p class="proile-rating">
                Plant Level : <span>100%</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item Acc">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    href="/ProfileAbout"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item Acc">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    href="/ProfilePlanting"
                    role="tab"
                    aria-controls="trees"
                    aria-selected="false"
                  >
                    Planting
                  </a>
                </li>
                <li class="nav-item Acc">
                  <a
                    class="nav-link"
                    id="library-tab"
                    href="/ProfileLibrary"
                    role="tab"
                    aria-controls="library"
                    aria-selected="false"
                  >
                    Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <Link to="/ProfileAbout" id="profile-edit-btn">
              Profile
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>FAVORITE CATEGORY</p>
              <a href="/Horror">Horror</a>
              <br />
              <a href="/Literature">Literature</a>
              <br />
              <a href="/Mysteries">Mysteries</a>
              <p>FAVORITE AUTHOR</p>
              <a >Định</a>
              <br />
              <a >Khôi</a>
              <br />
              <a >Ngân</a>
              <br />
              <a >Thư</a>
              <br />
              <a >Mỹ</a>
              <br />
            </div>
          </div>
          <form class="col-md-8" onSubmit={(e) => {
          UpdateInfo(e,info.email);
        }}>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Name</label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="name_input"
                  name="name_input"
                  className="inp"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Age</label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="age_input"
                  name="age_input"
                  className="inp"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Email</label>
              </div>
              <div class="col-md-6">
                <p className="inp1">{info.email}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Phone</label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="phone_input"
                  name="phone_input"
                  className="inp"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Profession</label>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  id="Profession_input"
                  name="Profession_input"
                  className="inp"
                  onChange={(e) => {
                    setProfess(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div class="row rowpad">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <div class="form-field ">
                    <input class="submit-btn" type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
  );
}

export default ProfileEdit;
