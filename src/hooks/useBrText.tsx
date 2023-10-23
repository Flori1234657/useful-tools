import { useState } from "react";

const useBrText = (lang: string) => {
  const [splitted, setSplitted] = useState<string[]>(lang.split(/0852/g));

  return splitted.map((el, i) => (el === "" ? <br key={`${el}${i}`} /> : el));
};

export default useBrText;
