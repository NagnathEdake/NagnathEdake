import React from "react";

function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of project one. It includes features like...",
      url: "https://github.com/yourusername/project-one",
      liveDemo: "https://yourwebsite.com/project-one",
      imgSrc: "path-to-image/project1.png",
    },
    {
      title: "Project Two",
      description:
        "A brief description of project two. It includes features like...",
      url: "https://github.com/yourusername/project-two",
      liveDemo: "https://yourwebsite.com/project-two",
      imgSrc: "path-to-image/project2.png",
    },
    {
      title: "Project Three",
      description:
        "A brief description of project three. It includes features like...",
      url: "https://github.com/yourusername/project-three",
      liveDemo: "https://yourwebsite.com/project-three",
      imgSrc: "path-to-image/project3.png",
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
