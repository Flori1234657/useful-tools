import { Link } from "react-router-dom";
import FooterLogo from "../assets/images/logo2.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Language } from "../ts/types/lang";

const Footer = (lang: Language) => {
  const footerStrings = lang.layout.footer;

  return (
    <footer
      className={
        footerStrings.section1.title === "ملاحة" ? "--home-footer" : ""
      }
    >
      <img loading="lazy" src={FooterLogo} alt="Website Logo" />
      <section>
        <h1>{footerStrings.section1.title}</h1>
        <ul>
          <li>
            <Link to="/">{footerStrings.section1.li1}</Link>
          </li>
          <li>
            <Link to="/tools">{footerStrings.section1.li2}</Link>
          </li>
          <li>
            <Link to="/task">{footerStrings.section1.li3}</Link>
          </li>
          <li>
            <Link to="/about-us">{footerStrings.section1.li4}</Link>
          </li>
        </ul>
      </section>
      <section>
        <h1>{lang.pages.aboutUs.subHeadings[4].topTxt}</h1>
        <ul>
          <li>
            <span>
              <MdEmail />
            </span>
            floriandollani15@gmail.com{" "}
          </li>
          <li>
            <span>
              <MdEmail />
            </span>
            info.fl29@gmail.com{" "}
          </li>
          <li>
            <span>
              <BsFillTelephoneFill />
            </span>
            +355 68 839 3968{" "}
          </li>
        </ul>
      </section>
      <section>
        <h1>{footerStrings.section3.title}</h1>
        <ul>
          <li>
            <Link to="https://portfolio-project-45af5.web.app/">
              {footerStrings.section3.li1}
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/florian-dollani-a2a95825b/">
              {footerStrings.section3.li2}
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/profile.php?id=100095043607448">
              {footerStrings.section3.li3}
            </Link>
          </li>
          <li>
            <Link to="https://github.com/Flori1234657">
              {footerStrings.section3.li4}
            </Link>
          </li>
          <li>
            <Link to="https://www.upwork.com/freelancers/~019188a8ab566308ba">
              {footerStrings.section3.li5}
            </Link>
          </li>
        </ul>
      </section>
      <div className="copyright-wrapper" aria-label="Copyright container">
        <h2
          dir={
            footerStrings.copyright === "حقوق الطبع والنشر © Florian Dollani"
              ? "rtl"
              : ""
          }
        >
          {footerStrings.copyright}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
