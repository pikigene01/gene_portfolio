import React from "react";

export default function Services() {
  return (
    <div>
      <section className="services pt-100 pb-100" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <div className="main-title">
                  <h4>
                    My <span>Services</span>
                  </h4>
                  <h6>What i offer</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h2>Theme Design</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley
                </p> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-desktop"></i>
                </div>
                <h2>Website Design</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley
                </p> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-quidditch"></i>
                </div>
                <h2>UI/UX Design</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley
                </p> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-camera"></i>
                </div>
                <h2>Graphic Design</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley
                </p> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h2>Wordpress Plugins</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley
                </p> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fab fa-medapps"></i>
                </div>
                <h2>App Developement</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
