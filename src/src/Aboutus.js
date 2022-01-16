import React from "react";
import "./css/AboutUs.css";
function Aboutus() {
  return (
    <div class="aboutus-section">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="aboutus">
              <h2 class="aboutus-title">About Us</h2>
              <p class="aboutus-text">
              Starting in 2021 our goal is to bring the best review, 
              recommended book for bookworms all over the world.
              </p>
              <p class="aboutus-text">
              The book categories are various so that you can easily 
              reach the books you want to read at the moment or for the 
              future. Besides, we also provides link which you can choose 
              to buy book or e-book.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="aboutus-banner">
              <img
                src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-5 col-sm-6 col-xs-12">
            <div class="feature">
              <div class="feature-box">
                <div class="clearfix">
                  <div class="iconset">
                    <span class="glyphicon glyphicon-cog icon"></span>
                  </div>
                  <div class="feature-content">
                    <h4>Work with heart</h4>
                    <p>
                    Our team tries our best to provide the best interface for user. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="feature-box">
                <div class="clearfix">
                  <div class="iconset">
                    <span class="glyphicon glyphicon-cog icon"></span>
                  </div>
                  <div class="feature-content">
                    <h4>Reliable services</h4>
                    <p>
                    We provide you with reliable links, so that you can buy it without any trouble.
                    </p>
                  </div>
                </div>
              </div>
              <div class="feature-box">
                <div class="clearfix">
                  <div class="iconset">
                    <span class="glyphicon glyphicon-cog icon"></span>
                  </div>
                  <div class="feature-content">
                    <h4>Great support</h4>
                    <p>
                    If you have any question or feedback, feel free to contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="our-webcoderskull padding-lg">
        <div class="container">
          <div class="row heading heading-icon">
            <h2>Our Team</h2>
          </div>
          <ul class="row">
            <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style={{ height: `349px` }}>
                <figure>
                  <img
                    src="https://www.clipartmax.com/png/small/84-848404_male.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  Dang Dinh
                </h3>
                <p>Freelance Web Developer</p>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style={{ height: `349px` }}>
                <figure>
                  <img
                    src="https://www.clipartmax.com/png/small/1-19496_male-teacher-2-clip-art-male-user-icon.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  Minh Khoi
                </h3>
                <p>Freelance Web Developer</p>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style={{ height: `349px` }}>
                <figure>
                  <img
                    src="https://www.clipartmax.com/png/small/331-3319077_avatars-clipart-female-female-cartoon-avatar.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  Thanh Ngan
                </h3>
                <p>Freelance Web Developer</p>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style={{ height: `349px` }}>
                <figure>
                  <img
                    src="https://www.clipartmax.com/png/small/121-1214390_female-avatar-female-avatar.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  Minh Thu
                </h3>
                <p>Freelance Web Developer</p>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-4">
              <div class="cnt-block equal-hight" style={{ height: `349px` }}>
                <figure>
                  <img
                    src="https://www.clipartmax.com/png/small/21-214382_female-clipart-transparent-female-avatar.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  Kim My
                </h3>
                <p>Freelance Web Developer</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
