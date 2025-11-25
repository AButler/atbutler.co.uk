import "./App.css";

interface Project {
  emoji: string;
  name: string;
  description: string;
  technologies?: string[];
  link?: string;
}

function App() {
  const version = import.meta.env.VITE_APP_INFORMATIONAL_VERSION || "0.0.0-dev";

  const projects: Project[] = [
    {
      emoji: "🦦",
      name: "LogOtter",
      description:
        "A collection of libraries to help create modern microservices using CosmosDB and Event Sourcing and the tools to test them.",
      technologies: [".NET", "CosmosDB", "Event Sourcing", "Microservices"],
      link: "https://github.com/LogOtter/log-otter",
    },
    {
      emoji: "💻",
      name: "Kong Portal CLI",
      description:
        "A CLI tool for pushing API Products, Versions & Documents to Kong Konnect",
      technologies: ["CLI", "Kong", "API Management"],
      link: "https://github.com/AButler/kong-portal-cli",
    },
    {
      emoji: "👷‍♂️",
      name: "OpenApiValidate",
      description:
        "A dotnet library for validating whether an API response matches against an OpenAPI document",
      technologies: [".NET", "OpenAPI", "API Validation"],
      link: "https://github.com/AButler/openapi-validate",
    },
    {
      emoji: "📤",
      name: "upload-release-assets",
      description: "A GitHub Action to upload assets to a Release",
      technologies: ["GitHub Actions", "CI/CD", "Automation"],
      link: "https://github.com/AButler/upload-release-assets",
    },
  ];

  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-header">
            <img
              src="https://www.gravatar.com/avatar/6a0cf973d68c8ebfcfec5cef7a49ef92?s=500"
              alt="Andrew Butler"
              className="profile-picture"
            />
            <h1 className="hero-title">Andrew Butler</h1>
          </div>
          <p className="hero-subtitle">
            Engineering Manager &middot; Technical Lead &middot; Open Source
            Contributor
          </p>
          <p className="hero-description">
            Passionate about building modern, scalable solutions and
            contributing to the open source community. Specializing in .NET,
            microservices, and developer tooling.
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="projects-section">
          <h2 className="section-title">Open Source Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) =>
              project.link ? (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <div className="project-header">
                    <span className="project-emoji">{project.emoji}</span>
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.technologies && (
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="project-link">View on GitHub →</span>
                </a>
              ) : (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <span className="project-emoji">{project.emoji}</span>
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.technologies && (
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </section>

        <section className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            Interested in collaborating or have questions about my projects?
          </p>
          <div className="contact-links">
            <a
              href="https://github.com/AButler"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/butlerat/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; 2025 Andrew Butler &middot; Built with React & Vite &middot; v
          {version}
        </p>
      </footer>
    </div>
  );
}

export default App;
