import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { LangType } from "../ts/enums/language";
import { changeLang } from "../utils/changeLang";
import App from "../App";

test("Does the language change?", async () => {
  const effect = vi
    .fn()
    .mockImplementation(async () => await changeLang(LangType.AR));
  await effect();

  render(<App />);
  const txt = screen.queryByText("!بسّر عملك");
  expect(txt).toBeDefined();
});
