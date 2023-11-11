/**
    ## Arrays for returnPass

       This arrays are to be used by the
       returnPass function, to select 
       the type of characters arr based 
       on user language InshaaAllah.
 */

export const arabicNum = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
export const latinNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export const hindiNum = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "०"];

export const symbolsArr = [
  ...Array.from({ length: 14 }, (_, index) => String.fromCharCode(33 + index)),
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "]",
  "-",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const getNonLatinLetters = (length: number, unicodeStart: number): string[] => {
  return Array.from({ length: length }, (_, index) =>
    String.fromCodePoint(unicodeStart + index)
  );
};

// Latin AA
const alphabeticBArray = [
  ...Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)),
  "ğ",
  "ı",
  "ş",
  "ç",
  "ü",
  "ö",
  "ë",
];
// Latin aa
const alphabeticSArray = [
  ...Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)),
  "Ğ",
  "İ",
  "Ş",
  "Ü",
  "Ö",
  "Ç",
  "Ë",
];

export const getArrBasedOnLang = (
  lang?: "AR" | "HI" | "RU",
  letter?: "SM" | "LG"
): string[] => {
  if (lang === "AR") return getNonLatinLetters(28, 0x621);
  if (lang === "HI") return getNonLatinLetters(44, 0x905);
  if (lang === "RU") return getNonLatinLetters(32, 0x0410);

  if (letter === "LG") return alphabeticBArray;
  if (letter === "SM") return alphabeticSArray;

  return [...alphabeticBArray, ...alphabeticSArray];
};
