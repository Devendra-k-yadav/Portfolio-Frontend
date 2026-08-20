const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <span className="gradient">Devendra Yadav</span>
            </h3>
            <p>
              Full Stack MERN Developer building scalable, responsive and
              user-focused web applications.
            </p>
            <div className="socials">
              <a
                className="social"
                href="https://github.com/Devendra-k-yadav"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                className="social"
                href="https://www.linkedin.com/in/devendra-kr-yadav-a962ab234"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                className="social"
                href="mailto:your-devendrapratap992@gmail.com"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="footer-col">
            <h4>Let's Connect</h4>
            <a href="mailto:your-devendrapratap992@gmail.com">your-devendrapratap992@gmail.com</a>
            <a href="#contact">Available for opportunities</a>
            <a href="#contact">Hire me →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Devendra Yadav. All rights reserved.
          </span>
          <span>Built with React • Node • Express • MongoDB</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
