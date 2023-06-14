import React from "react";

export default function Skills() {
  return (
    <div>
      <section className="skills pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="skill-div">
                <h2 className="headline">
                  My <span>Skill</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odio vel, doloremque dignissimos, doloribus esse ullam.
                  Voluptatibus, veritatis quas. Incidunt deserunt eius harum a
                  dolorem. Debitis, optio. Magnam cupiditate, adipisci?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odio vel, doloremque dignissimos, doloribus esse ullam.
                  Voluptatibus, veritatis quas. Incidunt deserunt eius harum
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-div ">
                <div className="skills-item mb-35">
                  <h6>PHP</h6>
                  <div className="bar">
                    <span className="fill" data-width="87%"></span>
                  </div>
                  <div className="tip"></div>
                </div>

                <div className="skills-item mb-35">
                  <h6>HTML5 & CSS</h6>
                  <div className="bar">
                    <span className="fill" data-width="97%"></span>
                  </div>
                  <div className="tip"></div>
                </div>

                <div className="skills-item mb-35">
                  <h6>AngularJS</h6>
                  <div className="bar">
                    <span className="fill" data-width="81%"></span>
                  </div>
                  <div className="tip"></div>
                </div>

                <div className="skills-item ">
                  <h6>SEO</h6>
                  <div className="bar">
                    <span className="fill" data-width="90%"></span>
                  </div>
                  <div className="tip"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
