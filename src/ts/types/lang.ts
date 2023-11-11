export type Language = {
  nav: Nav;
  layout: Layout;
  pages: Pages;
  errors: Errors;
};

export type Nav = {
  links: string[];
  button: string;
  lang: Lang;
  solidarity: string;
};

type Lang = {
  chosen: string;
  available: string[];
  localeString: string;
};

type Layout = {
  hero: Hero;
  services: Services;
  about: About;
  footer: Footer;
};

type Hero = {
  headingTxt: string;
  subHeadingTxt: string;
  button: string;
};

type Services = {
  headingTxt: string;
  subHeadingTxt: string;
  paragraph: string;
};

type About = {
  headingTxt: string;
  subHeadingTxt: string;
  paragraph: string;
  button: string;
};

type Footer = {
  section1: Section1;
  section3: Section3;
  copyright: string;
};

type Section1 = {
  title: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
};

type Section3 = {
  title: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
};

type Pages = {
  tools: Tools;
  tasks: Tasks;
  aboutUs: AboutUs;
};

type Tools = {
  headingTxt: string;
  searchBar: string;
  infoTxt: string;
  toolsNames: string[];
  toolsText: ToolsText;
  openError: string;
};

type Tasks = {
  headingTxt: string;
  firstPanel: FirstPanel;
  secondPanel: SecondPanel;
};

type FirstPanel = {
  headingTxt: string;
  selectsGroup: {
    country: string;
    city: string;
  };
  countriesNames: string[];
  informationText: string;
  buttons: {
    btnContinue: string;
    btnSkip: string;
  };
  errors: {
    headingErrTxt: string;
    axios: {
      "404Status": string;
      "500Status": string;
      others: string;
    };
    tryLater: string;
    closeBtn: string;
  };
};

type SecondPanel = {
  topInfo: string[];
  filter_Status: FilterStatus;
  cardsCategoryText: CardsCategoryText;
  taskModal: TaskModal;
  hijriTimes: string[];
  bottomInfoText: string;
  noTasksText: string;
  button: string;
};

type FilterStatus = {
  topText: string;
  option1: string;
  option2: string;
  option3: string;
};

type CardsCategoryText = {
  txt1: string;
  txt2: string;
  txt3: string;
};

type AboutUs = {
  headingTxt: string;
  subHeadings: SubHeading[];
};

type SubHeading = {
  topTxt: string;
  topParagraph?: string;
  ulList?: string[];
  endParagraph?: string;
  paragraph?: string[];
};

type Errors = {
  tools: string;
  lang: string;
};

type TaskModal = {
  sheet: {
    addTaskSheetHt: string;
    editTaskSheetHt: string;
    stateSelect: {
      headingText: string;
    };
    taskTextArea: {
      headingText: string;
      placeholder: string;
    };
    timeSelect: {
      headingText: string;
    };
  };
  cancelBtn: string;
  deleteBtn: string;
  submitBtn: {
    addTask: string;
    editTask: string;
  };
};

type ToolsText = {
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

export type PasswLevels = {
  normal: string;
  danger: string;
  warning: string;
  success: string;
};
