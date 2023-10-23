import React from "react";
import { Language } from "../ts/types/lang";
import useBrText from "../hooks/useBrText";

const About = (lang: Language) => {
  const aboutStrings = lang.layout.about;
  const paragraph = useBrText(aboutStrings.paragraph);

  return (
    <main className="about">
      <h1>{aboutStrings.headingTxt}</h1>
      <h2>{aboutStrings.subHeadingTxt}</h2>
      <p>{paragraph}</p>
      <button>{aboutStrings.button}</button>
    </main>
  );
};

export default About;
