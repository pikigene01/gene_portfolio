import React from "react";

export default function Counter() {
  return (
    <div>
      <section
        className="counter-area pt-100 pb-100"
        style={{
          backgroundImage: "url('assets/images/pexels-photo-220067.jpg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h2 className="counter" data-count="220">
                  1001
                </h2>
                <h5>Happy Clients</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h2 className="counter" data-count="700">
                  250
                </h2>
                <h5>Projects Done</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h2 className="counter" data-count="1100">
                  150
                </h2>
                <h5>Awards Won</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item ">
                <h2 className="counter" data-count="160">
                  1500
                </h2>
                <h5>Cups Tea</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
