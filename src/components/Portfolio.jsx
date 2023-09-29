import React from "react";

export default function Portfolio() {
  return (
    <div>
      <section
        className="portfolio bg-gray pt-100 pb-100"
        data-scroll-index="3"
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <div className="main-title">
                  <h4>
                    My <span>Portfolio</span>
                  </h4>
                  <h6>What i do</h6>
                </div>
              </div>
              <div className="port-filter text-center">
                <ul>
                  <li className="filter-item" data-filter="*">
                    All
                  </li>
                  <li data-filter=".design">Web Design</li>
                  <li data-filter=".application">Applications</li>
                  <li data-filter=".development">Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row portfolio-section">
            <div className="col-lg-4 col-md-6 item application">
              <div className="portfolio-item">
                <img src="assets/images/portfolio/img-1.png" alt="" />
                <div className="item-overlay">
                  <h6>Application</h6>
                  <div className="icons">
                    <span className="icon">
                      <span className="port-link">
                        <a href="assets/images/portfolio/img-1.png">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                      <a href="#">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item design">
              <div className="portfolio-item">
                <img src="assets/images/portfolio/img-2.png" alt="" />
                <div className="item-overlay">
                  <h6>Web Design</h6>
                  <div className="icons">
                    <span className="icon">
                      <span className="port-link">
                        <a href="assets/images/portfolio/img-2.png">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                      <a href="#">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item development">
              <div className="portfolio-item">
                <img src="assets/images/portfolio/img-3.jpg" alt="" />
                <div className="item-overlay">
                  <h6>Application</h6>
                  <div className="icons">
                    <span className="icon">
                      <span className="port-link">
                        <a href="assets/images/portfolio/img-3.jpg">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                      <a target="_blank" href="https://apkpure.com/p/com.pikidelivery.pikideliveryapp">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item design development">
              <div className="portfolio-item">
                <img src="assets/images/portfolio/img-4.jpg" alt="" />
                <div className="item-overlay">
                  <h6>Development</h6>
                  <div className="icons">
                    <span className="icon">
                      <span className="port-link">
                        <a href="assets/images/portfolio/img-4.jpg">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                      <a target="_blank" href="https://apkpure.com/p/com.pikidelivery.pikideliveryapp">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item development application">
              <div className="portfolio-item">
                <img src="assets/images/portfolio/img-5.jpg" alt="" />
                <div className="item-overlay">
                  <h6>Web Design</h6>
                  <div className="icons">
                    <span className="icon">
                      <span className="port-link">
                        <a href="assets/images/portfolio/img-5.jpg">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                      <a href="#">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item application development">
              <div className="portfolio-item">
                <img src="assets/images/portfolio/img-6.jpg" alt="" />
                <div className="item-overlay">
                  <h6>Web Design</h6>
                  <div className="icons">
                    <span className="icon">
                      <span className="port-link">
                        <a href="assets/images/portfolio/img-6.jpg">
                          <i className="fa fa-search"></i>
                        </a>
                      </span>
                      <a href="#">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
