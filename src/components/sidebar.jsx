import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div>
          <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
              <i />
          </nav>
        <aside
          id="colorlib-aside"
          className="border js-fullheight"
        >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/face.jpg)" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Thien Ho</a>
            </h1>
            <span className="position">
              <a href="#softwareengineer">Software Engineer</a> in California
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#introduction" data-nav-section="introduction">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                {/* <li className="active">
                  <a href="#" data-nav-section="services">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="experience">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="work">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="blog">
                    Blog
                  </a>
                </li> */}
                <li>
                  <a href="#contact" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            {/* <ul>
              <li>
                <a href="#">
                  <i className="icon-facebook2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin2" />
                </a>
              </li>
            </ul> */}
          </div>
        </aside>
      </div>
      </div>
    );
  }
}

export default Sidebar;
