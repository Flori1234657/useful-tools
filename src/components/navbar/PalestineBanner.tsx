import PsFlag from "../../assets/svg/PalestineFlag.svg";
import { useMainStore } from "../../state/mainState";

const PalestineBanner = () => {
  const strings = useMainStore((state) => state.language.nav);

  return (
    <div
      className="nav-bar-container__Palestine-support"
      aria-label="Wrapper for text solidarity with Palestine"
    >
      <h1>{strings.solidarity}</h1>
      <img src={PsFlag} alt="Palestine Flag" />
    </div>
  );
};

export default PalestineBanner;
