import { Breakpoint } from "../ts/enums/breakpoints";

const returnBreakpoint = (): Breakpoint => {
  const wdth = window.innerWidth;

  if (wdth <= 450) return Breakpoint.XS;
  if (wdth > 450 && wdth <= 600) return Breakpoint.SM;
  if (wdth > 600 && wdth <= 900) return Breakpoint.MD;
  if (wdth > 900 && wdth <= 1200) return Breakpoint.LG;
  if (wdth > 1199) return Breakpoint.XL;

  return Breakpoint.XL;
};

export default returnBreakpoint;
