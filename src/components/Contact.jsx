import React from 'react'

export default function Contact() {
  return (
    <div>

<section className="contact pt-100 pb-100" data-scroll-index="5">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                       <div className="section-title">
                            <div className="main-title">
                                <h4>Contact <span>Me</span></h4>
                                <h6>Contact With Me</h6>
                            </div>
                            
                       </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        
                        <form id='contact-form' method='POST'><input type='hidden' name='form-name' value='contactForm' />
                            <div className="row">
                               <div className="col-md-6">
                                  <div className="form-group">
                                     <input type="text" name="name" className="form-control" id="first-name" placeholder="Name *" required="required"/>
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="form-group">
                                     <input type="email" name="email" className="form-control" id="email" placeholder="Email *" required="required"/>
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="form-group">
                                       <textarea rows="6" name="message" className="form-control" id="description" placeholder="Message *" required="required"></textarea>
                                  </div>
                               </div>
                                <div className="col-md-12 text-center">
                                   
                                    <button id="contact-submit" className="div-btn">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info">
                            <p className="contact-info-title">Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type</p>
                            <div className="contact-info-item">
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> No. 61 Melfort Goromonzi</li>
                                <li><i className="fas fa-phone"></i> +263782954717</li>
                                <li><i className="fas fa-paper-plane"></i> pikigene01@gmail.com</li>
                                <li><i className="fas fa-globe"></i> www.genepiki.com</li>
                            </ul>
                            </div>
                            <div className="social-icons mt-15">
                                    <a href="#" target='_blank'><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" target='_blank'><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" target='_blank'><i className="fab fa-google-plus-g"> </i></a>
                                    <a href="#" target='_blank'><i className="fab fa-twitter"></i></a>
                                    <a href="#" target='_blank'><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
