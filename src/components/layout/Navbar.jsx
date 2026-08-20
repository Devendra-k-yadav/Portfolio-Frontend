import { useState } from "react";
import portfolioConstants from "../../utils/constants";

const { navigationLinks } = portfolioConstants;

const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="logo" href="#home">
          Devendra<span>.</span>
        </a>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navigationLinks.map((link) => (
            <a
              key={link}
              className={activeSection === link ? "active" : ""}
              href={`#${link}`}
              onClick={() => setOpen(false)}
            >
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
