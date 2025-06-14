import React from "react";
import logo from "../assets/logo/n.png";
function AboutMe() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={logo} alt="About Me" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              Hi, I'm <strong>Nagnath</strong>, a passionate web developer
              dedicated to creating dynamic and user-friendly web experiences.
              With expertise in modern technologies and frameworks, I enjoy
              solving problems and bringing ideas to life through code.
            </p>
            <p>
              I'm currently pursuing an MCA degree in Computer Science, where I
              continue to hone my skills in frontend and backend development. My
              interests include learning new technologies, collaborating on
              projects, and constantly improving as a developer.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
