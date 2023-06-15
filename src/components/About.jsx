import React from "react";

export default function About() {
  return (
    <div>
      <section className="about pt-100 pb-100" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="about-div">
                <div className="about-title">
                  <h2>
                    About <span>Me</span>
                  </h2>
                  <h4> React Developer And Forentend Developer.</h4>
                </div>
                <p>
                  Me <b>Gene</b> have been working as a software developer since
                  2015 and I started learning Java as my primary language. I
                  have more 7 years experience as a freelancer developer.
                </p>

                <div className="table-responsive">
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <th>
                          <i className="hidden-xs far fa-calendar-alt"></i>
                          <span>Brithday</span>
                        </th>
                        <td>24-12-2000</td>
                      </tr>
                      <tr>
                        <th>
                          <i className="hidden-xs fas fa-phone"></i>
                          <span>Call</span>
                        </th>
                        <td>+263782954717</td>
                      </tr>
                      <tr>
                        <th>
                          <i className="hidden-xs  fas fa-paper-plane"></i>
                          <span>Email</span>
                        </th>
                        <td>pikigene01@gmail.com</td>
                      </tr>
                      <tr>
                        <th>
                          <i className="hidden-xs fas fa-globe"></i>
                          <span>Website</span>
                        </th>
                        <td>www.genepiki.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <span className="about-btn">
                  <a className="div-btn" download={true} href="assets/cv/cv.docx">
                    Download CV
                  </a>
                  <a className="div-btn" href="mailto:pikigene01@gmail.com">
                    Hire Me
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img
                  src="assets/images/background/gene.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
