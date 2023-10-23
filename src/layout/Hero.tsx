import MachineImg from "../assets/images/bckgMachine.webp";
import AdobeCopyright from "../assets/images/adobeCopyrightEN.webp";
import { Language } from "../ts/types/lang";

const Hero = (lang: Language) => {
  const homeStrings = lang.layout.hero;

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
      <img
        src={AdobeCopyright}
        alt="Adobe Copyright"
        className="hero-phone-adobe-copyright-img"
      />
    </header>
  );
};

export default Hero;
