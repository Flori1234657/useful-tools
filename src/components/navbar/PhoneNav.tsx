import { useState } from "react";
import { useMainStore } from "../../state/mainState";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Links from "./Links";
import SelectCont from "./Select";

const PhoneNav = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const strings = useMainStore((state) => state.language.nav);

  return (
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
  );
};

export default PhoneNav;
