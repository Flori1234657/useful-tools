import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          solidColor: "white",
          solidBg: "#375165",
          solidHoverBg: "#273e47",
          solidActiveBg: "#273e47",
          //   solidDisabledColor: "#71a9ed",
          //   solidDisabledBg: "#e2f7ff",
        },
      },
    },
  },
});
