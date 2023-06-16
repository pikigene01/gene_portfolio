import React, { useState } from "react";
import swal from "sweetalert";

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const contactMe = (e) => {
    e.preventDefault();
    swal(
      "Warning",
      "something went wrong!!! try send to pikigene01@gmail.com",
      "warning"
    );
    setInputs({ ...inputs, name: "", email: "", message: "" });
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className="contact pt-100 pb-100" data-scroll-index="5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section-title">
                <div className="main-title">
                  <h4>
                    Contact <span>Me</span>
                  </h4>
                  <h6>Contact With Me</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={contactMe} method="POST">
                <input type="hidden" name="form-name" value="contactForm" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        onChange={handleChange}
                        value={inputs?.name}
                        type="text"
                        name="name"
                        className="form-control"
                        id="first-name"
                        placeholder="Name *"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        onChange={handleChange}
                        value={inputs?.email}
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email *"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        onChange={handleChange}
                        value={inputs?.message}
                        rows="6"
                        name="message"
                        className="form-control"
                        id="description"
                        placeholder="Message *"
                        required="required"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
                      id="contact-submit"
                      className="div-btn"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
                <p className="contact-info-title">Gene Piki Contact Details </p>
                <div className="contact-info-item">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> No. 61 Melfort
                      Goromonzi
                    </li>
                    <li>
                      <i className="fas fa-phone"></i> +263782954717
                    </li>
                    <li>
                      <i className="fas fa-paper-plane"></i>{" "}
                      pikigene01@gmail.com
                    </li>
                    <li>
                      <i className="fas fa-globe"></i> www.genepiki.com
                    </li>
                  </ul>
                </div>
                <div className="social-icons mt-15">
                  <a href="https://facebook.com/pikigene" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gene-piki-927586211/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3B4TgTsXBuQRuDQge8p%2BC1eQ%3D%3D"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/pikigene01" target="_blank">
                    <i className="fab fa-github"> </i>
                  </a>
                  <a href="https://twitter.com/pikigene" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/pikigene" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
