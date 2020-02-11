import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc" id="about">
                      <span className="heading-meta" >About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <strong>Hi I'm Thien Ho</strong> I am a software
                        engineer that enjoys a challenge. I spend most of my
                        days coding and trying to build new things. As a full
                        stack developer I do my best to polish up on my code and
                        trying to learn new things.
                      </p>
                      <p>Here are my current skills.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i className="icon-bulb" />
                      </span>
                      <h3>Front-End</h3>
                      <ul>
                        <li>
                          HTML
                        </li>
                        <li>
                          CSS
                        </li>
                        <li>
                          JavaScript
                        </li>
                        <li>
                          React.JS
                        </li>
                        <li>
                          jQuery
                        </li>
                        <li>
                          AJAX
                        </li>
                        </ul>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="services color-2">
                      <span className="icon2">
                        <i className="icon-globe-outline" />
                      </span>
                      <h3>Middle-Tier</h3>
                      <ul>
                        <li>C#</li>
                        <li>ASP.Net</li>
                        <li>.Net Core</li>
                        <li>ADO</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="services color-3">
                      <span className="icon2">
                        <i className="icon-data" />
                      </span>
                      <h3>Back-End</h3>
                      <ul>
                        <li>T-SQL</li>
                        <li>SQL Server</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-phone3" />
                      </span>
                      <h3>Others/Tools</h3>
                      <ul>
                        <li>Visual Studio 2019</li>
                        <li>Visual Studio Code</li>
                        <li>Chrome Dev Tools</li>
                        <li>TFS/Git</li>
                        <li>Trello</li>
                        <li>Slack</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-12 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    {/* <div className="hire">
                      <h2>
                        There will be more projects to come <br />
                        but here are the projects I have currently!
                      </h2>
                      <a href="#" className="btn-hire">
                        Hire me
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
