import React from "react";
import "./Profile.css";
import tree from "../img/tree.gif";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { database } from "../Database/Firebase";
import { useState } from "react";

function ProfileAbout() {
  const [info, setInfo] = useState([]);

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
  return (
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img src={info.avatar} alt="" />
            </div>
          </div>
          <div class="col-md-6">
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
            <Link to="/ProfileEdit" id="profile-edit-btn">
              Edit Profile
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
          <div class="col-md-8 fade show">
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Name</label>
              </div>
              <div class="col-md-6">
                <p className="inp1">{info.name}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Age</label>
              </div>
              <div class="col-md-6">
                <p className="inp1">{info.age}</p>
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
                <p className="inp1">{info.phone}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label className="lab">Profession</label>
              </div>
              <div class="col-md-6">
                <p className="inp1">{info.profession}</p>
              </div>
            </div>
          </div>
          {/* <div class="tab-pane fade show" id="tree" role="tabpanel" aria-labelledby="profile-tab">
                                   <img src={tree} />
                            </div>
                            <div class="tab-pane fade show" id="libr" role="tabpanel" aria-labelledby="library-tab">
                                   <p>aaaaaaa</p>
                            </div> */}
        </div>
        {/* </div>
                </div> */}
      </form>
    </div>
  );
}

export default ProfileAbout;
