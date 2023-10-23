import PsFlag from "../../assets/svg/PalestineFlag.svg";
import SelectCont from "./Select";
import Links from "./Links";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/images/logo.webp";
import { useState } from "react";
import { useMainStore } from "../../state/mainState";

const NavBar = () => {
  const strings = useMainStore((state) => state.language.nav);
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <div className="nav-bar-container" aria-label="Navigation Bar Container">
      <div
        className="nav-bar-container__Palestine-support"
        aria-label="Wrapper for text solidarity with Palestine"
      >
        <h1>{strings.solidarity}</h1>
        <img src={PsFlag} alt="Palestine Flag" />
      </div>
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
        <div
          className="nav-bar-container__phone-nav"
          aria-label="Phone navigation container"
        >
          <button
            onClick={() => setToggleNav((prev) => !prev)}
            aria-label="Toggle navigation menu button"
          >
            {toggleNav ? <IoClose /> : <HiMenuAlt3 />}
          </button>
          <div
            className={`nav-bar-container__phone-nav__links-and-select-container ${
              toggleNav ? "--visible" : "--hidden"
            }`}
            aria-label="Container for links and language select of phone navigation"
          >
            <ul className="nav-bar-container__ph-links">
              <Links {...strings} />
            </ul>
            <SelectCont {...strings} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
