import { Link } from "react-router-dom";
import FooterLogo from "../assets/images/logo2.webp";

const Footer = () => {
  return (
    <footer>
      <img src={FooterLogo} alt="Website Logo" />
      <section>
        <h1>Navigation</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </section>
      <section>
        <h1>Contact</h1>
        <ul>
          <li>floriandollani15@gmail.com</li>
          <li>info.fl29@gmail.com</li>
          <li>+355 68 839 3968</li>
        </ul>
      </section>
      <section>
        <h1>Other Links</h1>
        <ul>
          <li>
            <Link to="https://portfolio-project-45af5.web.app/">
              Portfolio Website
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/florian-dollani-a2a95825b/">
              Linkedin
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/profile.php?id=100095043607448">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="https://github.com/Flori1234657">GitHub</Link>
          </li>
          <li>
            <Link to="https://www.upwork.com/freelancers/~019188a8ab566308ba">
              Up Work
            </Link>
          </li>
        </ul>
      </section>
      <div className="copyright-wrapper" aria-label="Copyright container">
        <h2>Copyright© Florian Dollani</h2>
      </div>
    </footer>
  );
};

export default Footer;
