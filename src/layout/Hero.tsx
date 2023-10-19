import MachineImg from "../assets/images/bckgMachine.webp";
import AdobeCopyright from "../assets/images/adobeCopyright.webp";

const Hero = () => {
  return (
    <header>
      <div
        className="hero-txt-container"
        aria-label="Container for text and paragraph and button of top section"
      >
        <h1>Simplify your work!</h1>
        <p>
          Useful tools to perform the action you are looking for, all in one
          place.
        </p>
        <button>Learn More</button>
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
