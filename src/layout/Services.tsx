import ToolsImg from "../assets/images/aboutImg.jpg";
import { Language } from "../ts/types/lang";
import useBrText from "../hooks/useBrText";

const Services = (lang: Language) => {
  const servicesStrings = lang.layout.services;
  const paragraph = useBrText(servicesStrings.paragraph);

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
        <img src={ToolsImg} alt="Tools image" />
      </div>
    </main>
  );
};

export default Services;
