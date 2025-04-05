import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-nav">
        <li>
          <a href="#home" className="footer-link">
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className="footer-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="footer-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link">
            About
          </a>
        </li>
      </ul>
      <p className="footer-copy">
        © {new Date().getFullYear()} Atanu Das. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
