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
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in.
              </p>
              <p class="aboutus-text">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
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
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante, dapibus in.
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
                      Donec vitae sapien ut libero venenatis faucibu. Nullam
                      quis ante. Etiam sit amet orci eget eros faucibus
                      tincidunt
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
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante, dapibus in.
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
