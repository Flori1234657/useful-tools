import MachineImg from "../assets/images/bckgMachine.webp";
import { Language } from "../ts/types/lang";
import { useEffect, useState } from "react";

const Hero = (lang: Language) => {
  const homeStrings = lang.layout.hero;
  const [copyrightImage, setCopyrightImage] = useState(null);
  useEffect(() => {
    import(`../assets/images/adobeCopyright${lang.nav.lang.chosen}.webp`)
      .then((img) => setCopyrightImage(img.default))
      .catch((err) => console.log(err));
  }, [lang]);

  return (
    <header
      className={
        homeStrings.headingTxt === "!بسّر عملك" ? "--heading-right" : ""
      }
    >
      <div
        className="hero-txt-container"
        aria-label="Container for text and paragraph and button of top section"
      >
        <h1>{homeStrings.headingTxt}</h1>
        <p>{homeStrings.subHeadingTxt}</p>
        <button>{homeStrings.button}</button>
      </div>
      <img src={MachineImg} alt="Machine image" className="hero-phone-img" />
      {copyrightImage !== null && (
        <img
          src={copyrightImage}
          alt="Adobe Copyright"
          className="hero-phone-adobe-copyright-img"
        />
      )}
    </header>
  );
};

export default Hero;
