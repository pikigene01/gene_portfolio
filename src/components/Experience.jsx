import React from "react";

export default function Experience() {
  return (
    <div>
      <section className="timeline pt-100 pb-100" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <div className="main-title">
                  <h4>
                    My <span>Experience</span>
                  </h4>
                  <h6>My Recent Experiences</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="main-timeline">
              <div className="timeline">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <span className="date">Apr 2015 - Mar 2016</span>
                  <h5 className="title">Software Engineer</h5>
                  <p className="description">
                    l started my software engineer work at a young age and l was
                    that person you can tell loves his work.
                  </p>
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <span className="date">Apr 2016 - Mar 2017</span>
                  <h5 className="title">Web Developer</h5>
                  <p className="description">
                    Built a mobile application that makes it possible for users
                    to access, rounds, stands investments, and all the other
                    activities that are done in TBD trust.
                  </p>
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <span className="date">Apr 2017 - Present</span>
                  <h5 className="title">Frontend Developer</h5>
                  <p className="description">
                    Developed a dealer management mobile application for
                    CoreLogic using Flutter & Flutter-Bloc for State management
                    followed strict TDD principles, used sonar cube for
                    monitoring code test coverage, collaborated with more than
                    30developers on a single projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
