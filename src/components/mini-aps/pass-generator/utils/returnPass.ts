/**
    ## Return random pass

       We have done this functions 
       to return a random password
       based on what user want to
       be included InshaaAllah.
 */

import { Checked } from "../../../../ts/types/mini-apps/PSG/checkboxes";
import { LangTypeMap } from "../../../../ts/types/mini-apps/PSG/utils";
import {
  arabicNum,
  hindiNum,
  latinNum,
  getArrBasedOnLang,
  symbolsArr,
} from "./arrays";
import { shufflePasswordLetters } from "./shuffle";

/**
    ## Array based on lang
       
       This is an object to be used
       on generateRandPass function
       to know what type of numbers
       and letters we want based on
       user language InshaaAllah.
 */

const langArrTypeMap: LangTypeMap = {
  AR: {
    letters: getArrBasedOnLang("AR"),
    numbers: arabicNum,
  },
  HI: {
    letters: getArrBasedOnLang("HI"),
    numbers: hindiNum,
  },
  RU: {
    letters: getArrBasedOnLang("RU"),
    numbers: latinNum,
  },
};

/**
    ## Main function
       
       This function is to be
       used on Generate button
       click InshaaAllah.
 */
export const generateRandPass = (
  checked: Checked,
  length: number,
  lang?: "AR" | "HI" | "RU"
) => {
  /**  
        _First we declare the characters
         arrays with the value of char
         based on language InshaaAllah.
   */

  const lettersArr = lang
    ? langArrTypeMap[lang].letters
    : getArrBasedOnLang(undefined, "LG");
  const numbersArr = lang ? langArrTypeMap[lang].numbers : latinNum;
  const smLangArr = getArrBasedOnLang(undefined, "SM");

  // First array to be sure that we have at least one char per selected type InshaaAllah
  const oneCharPerType: (string | number)[] = [];
  // Second array to get all selected char types InshaaAllah
  const fullArr: (string | number)[] = [];

  if (checked.BigAbc) {
    oneCharPerType.push(lettersArr[getRandomNum(lettersArr.length - 1)]);
    fullArr.push(...lettersArr);
  }
  if (checked.SmallAbc && !lang) {
    oneCharPerType.push(smLangArr[getRandomNum(32)]);
    fullArr.push(...smLangArr);
  }
  if (checked.Numbers) {
    oneCharPerType.push(numbersArr[getRandomNum(9)]);
    fullArr.push(...numbersArr);
  }
  if (checked.Symbols) {
    oneCharPerType.push(symbolsArr[getRandomNum(29)]);
    fullArr.push(...symbolsArr);
  }

  // An unShuffled array for final password InshaaAllah
  const unShuffledArr = [...oneCharPerType];

  for (let i = unShuffledArr.length; i < length; i++) {
    unShuffledArr.push(fullArr[getRandomNum(fullArr.length - 1)]);
  }

  // This function is used to shuffle the final password InshaaAllah
  return shufflePasswordLetters(unShuffledArr).join("");
};

// Math.floor(Math.random() * (max - min + 1) + min) /_min and max included InshaaAllah

export function getRandomNum(length: number): number {
  // length is -1
  return Math.floor(Math.random() * (length - 0 + 1) + 0);
}
