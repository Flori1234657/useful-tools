import { useMainStore } from "../state/mainState";
import { Link } from "react-router-dom";
import useBrText from "../hooks/useBrText";

const AboutUs = () => {
  const lang = useMainStore((state) => state.language.pages.aboutUs);
  const [about, endParagraph] = [
    useBrText(lang.subHeadings[0].topParagraph || ""),
    useBrText(lang.subHeadings[0].endParagraph || ""),
  ];

  return (
    <main
      className={`about-us ${lang.headingTxt === "من نحن" ? "--right" : ""}`}
    >
      <h1>{lang.headingTxt}</h1>

      <article>
        <section aria-label="Who we are section">
          <h2>{lang.subHeadings[0].topTxt}</h2>
          <p>{about}</p>
          <ul>
            {lang.subHeadings[0].ulList?.map((el, i) => (
              <li key={el + i}>{el}</li>
            ))}
          </ul>
          <p>{endParagraph}</p>
        </section>
        <section aria-label="Services section">
          <h2>{lang.subHeadings[1].topTxt}</h2>
          <ul>
            {lang.subHeadings[1].paragraph!.map((el) => (
              <li key={el + "services-about"}>{el}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Certificates section">
          <h2>{lang.subHeadings[2].topTxt}</h2>
          <ul>
            {lang.subHeadings[2].ulList?.map((el) => (
              <li key={el + "cert-about"}>{el}</li>
            ))}
          </ul>
        </section>
        <section aria-label="More information section">
          <h2>{lang.subHeadings[3].topTxt}</h2>
          <ul>
            <li>
              <Link to="#">{lang.subHeadings[3].ulList![0]}</Link>
            </li>
            <li>
              <Link to="#">{lang.subHeadings[3].ulList![1]}</Link>
            </li>
          </ul>
        </section>
        <section aria-label="Contact info section">
          <h2>{lang.subHeadings[4].topTxt}</h2>
          <ul>
            <li>
              <Link to="#">+355 68 839 3968</Link>
            </li>
            <li>
              <Link to="#">info.fl29@gmail.com</Link>
            </li>
            <li>
              <Link to="#">{lang.subHeadings[4].ulList![0]}</Link>
            </li>
            <li>
              <Link to="#">{lang.subHeadings[4].ulList![1]}</Link>
            </li>
            <li>
              <Link to="#">{lang.subHeadings[4].ulList![2]}</Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default AboutUs;
