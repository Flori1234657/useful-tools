import { Language } from "../ts/types/lang";
import returnBreakpoint from "../utils/returnBreakpoint";
import useBestImage from "../hooks/useBestImage";

const Hero = (lang: Language) => {
  const winBreakpoint = returnBreakpoint();
  const homeStrings = lang.layout.hero;

  const copyrightImage = useBestImage({
    dependency: lang,
    path: `../assets/images/adobeCopyright${lang.nav.lang.chosen}.webp`,
  });
  const bestImage = useBestImage({
    path: `../assets/images/bckgMachine${winBreakpoint}.webp`,
  });

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

      <img
        src={copyrightImage}
        alt="Adobe Copyright"
        className="hero-phone-adobe-copyright-img"
      />
    </header>
  );
};

export default Hero;
