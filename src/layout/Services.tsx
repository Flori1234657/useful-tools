import { Language } from "../ts/types/lang";
import useBrText from "../hooks/useBrText";
import { useEffect, useState } from "react";
import returnBreakpoint from "../utils/returnBreakpoint";

const Services = (lang: Language) => {
  const servicesStrings = lang.layout.services;
  const paragraph = useBrText(servicesStrings.paragraph);
  const [bestImage, setBestImage] = useState<string>("");

  useEffect(() => {
    const winBreakpoint = returnBreakpoint();
    import(`../assets/images/aboutImg${winBreakpoint}.webp`)
      .then((img) => setBestImage(img.default))
      .catch(
        (err) => console.log(err) // Me ui dhe lang files
      );
  }, []);

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
