import { PasswLevels } from "../lang";

export type ToolsText = {
  PSG: {
    heading: string;
    input: {
      placeholder: string;
      levels: PasswLevels;
      copyBtn: string;
    };
    passLength: string;
    include: {
      mainText: string;
      options: string[];
    };
    generateBtn: string;
  };
  IMR: {
    heading: string;
    uploadBtn: string;
    threeBtns: {
      downl: string;
      retry: string;
      upload: string;
    };
    error: string;
  };
  CCC: {
    heading: string;
    label1: string;
    label2: string;
    level: {
      GOOD: string;
      BAD: string;
      MIDDLE: string;
      PLACEHOLDER: string;
    };
  };
  ARC: {
    heading: string;
    calculate: string;
    W: string;
    H: string;
    A: string;
    result: string;
  };
};
