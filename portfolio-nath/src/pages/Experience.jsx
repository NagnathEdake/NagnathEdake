import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Experience</h2>
        <div className="row">
          {/* Experience 1 */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Frontend Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Company Name</h6>
                <p className="card-text">Jan 2020 - Present</p>
                <ul>
                  <li>
                    Developed and maintained responsive websites using HTML,
                    CSS, JavaScript, and React.
                  </li>
                  <li>
                    Collaborated with the design team to improve user experience
                    and interface.
                  </li>
                  <li>
                    Optimized website performance to improve page load speed by
                    30%.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Company Name</h6>
                <p className="card-text">Jun 2018 - Dec 2019</p>
                <ul>
                  <li>
                    Developed RESTful APIs using Node.js and Express.js for
                    client-side consumption.
                  </li>
                  <li>
                    Integrated third-party services like payment gateways and
                    email APIs.
                  </li>
                  <li>
                    Worked with MongoDB to store and retrieve data for web
                    applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Web Developer Intern</h5>
                <h6 className="card-subtitle mb-2 text-muted">Company Name</h6>
                <p className="card-text">Jan 2018 - May 2018</p>
                <ul>
                  <li>
                    Assisted in building and maintaining company websites using
                    WordPress and HTML/CSS.
                  </li>
                  <li>
                    Participated in code reviews and learned best practices for
                    writing clean, maintainable code.
                  </li>
                  <li>
                    Tested websites and provided feedback for improvements.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Add more experiences as needed */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
