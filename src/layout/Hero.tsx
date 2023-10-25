import { Language } from "../ts/types/lang";
import { useEffect, useState } from "react";
import returnBreakpoint from "../utils/returnBreakpoint";

const Hero = (lang: Language) => {
  const homeStrings = lang.layout.hero;
  const [copyrightImage, setCopyrightImage] = useState(null);
  const [bestImage, setBestImage] = useState<string>("");

  useEffect(() => {
    import(`../assets/images/adobeCopyright${lang.nav.lang.chosen}.webp`)
      .then((img) => setCopyrightImage(img.default))
      .catch((err) => console.log(err));
  }, [lang]);

  useEffect(() => {
    const winBreakpoint = returnBreakpoint();
    import(`../assets/images/bckgMachine${winBreakpoint}.webp`)
      .then((img) => setBestImage(img.default))
      .catch(
        (err) => console.log(err) // Me ui dhe lang files
      );
  }, []);

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
      <img src={bestImage} alt="Machine image" className="hero-phone-img" />
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
