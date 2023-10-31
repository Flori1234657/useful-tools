import SelectCont from "./Select";
import Links from "./Links";
import Logo from "../../assets/images/logo.webp";
import { useMainStore } from "../../state/mainState";
import PalestineBanner from "./PalestineBanner";
import PhoneNav from "./PhoneNav";

const NavBar = () => {
  const strings = useMainStore((state) => state.language.nav);

  return (
    <div className="nav-bar-container" aria-label="Navigation Bar Container">
      <PalestineBanner />
      <nav>
        <img src={Logo} alt="Website Logo" />
        <ul className="nav-bar-container__pc-links">
          <Links {...strings} />
        </ul>
        <div
          className="nav-bar-container__btn-select-container"
          aria-label="Container for button and select"
        >
          <button>{strings.button}</button>
          <SelectCont {...strings} />
        </div>
        <PhoneNav />
      </nav>
    </div>
  );
};

export default NavBar;
