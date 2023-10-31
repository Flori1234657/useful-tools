import { Language } from "../ts/types/lang";
import useBrText from "../hooks/useBrText";
import returnBreakpoint from "../utils/returnBreakpoint";
import useBestImage from "../hooks/useBestImage";

const Services = (lang: Language) => {
  const servicesStrings = lang.layout.services;
  const paragraph = useBrText(servicesStrings.paragraph);

  const winBreakpoint = returnBreakpoint();
  const bestImage = useBestImage({
    path: `../assets/images/aboutImg${winBreakpoint}.webp`,
  });

  return (
    <main className="services">
      <h1>{servicesStrings.headingTxt}</h1>
      <div className="services__bottom-content" aria-label="Content wrapper">
        <div
          className={`services__bottom-content__text-content ${
            servicesStrings.headingTxt === "ماذا يقدم موقعنا؟"
              ? "--right-services"
              : ""
          }`}
          aria-label="Text content wrapper"
        >
          <h2>{servicesStrings.subHeadingTxt}</h2>
          <p>{paragraph}</p>
        </div>
        <img loading="lazy" src={bestImage} alt="Tools image" />
      </div>
    </main>
  );
};

export default Services;
