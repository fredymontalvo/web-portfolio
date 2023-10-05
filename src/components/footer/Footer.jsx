import "./footer.style.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="social-icons">
          <a className="github-icon" href="https://www.github.com/">
            <FaGithub style={{ color: "#bf965f" }} />
          </a>
          <a className="linkedin-icon" href="https://linkedin.com/">
            <FaLinkedin style={{ color: "#bf965f" }} />
          </a>
          <a className="instagram-icon"  href="https://www.instagram.com/">
            <FaInstagram style={{ color: "#bf965f" }} />
          </a>
        </div>
        <p className="copy-right">&copy; 2023 All rights reserved.</p>
      </div>
    </>
  );
};
export default Footer;
