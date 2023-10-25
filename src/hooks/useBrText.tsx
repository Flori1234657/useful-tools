const useBrText = (lang: string) => {
  return lang
    .split(/0852/g)
    .map((el, i) => (el === "" ? <br key={`${el}${i}`} /> : el));
};

export default useBrText;
