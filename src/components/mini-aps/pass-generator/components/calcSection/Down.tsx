import { Checkbox, Stack, Typography } from "@mui/joy";
import { CheckboxIndex } from "../../../../../ts/enums/mini-apps/PSG/checkboxes";
import { useMiniAppsStore } from "../../../../../state/miniAppsState";
import { useMainStore } from "../../../../../state/mainState";
import { psgCheckboxSx } from "../../../SX-objs/pasgCheckbox";

const Down = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.PSG);
  const dir = useMainStore((state) => state.language.nav.lang.chosen);

  const mnaps = useMiniAppsStore((state) => state.psg.checkBoxes);

  const handleSetChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: CheckboxIndex
  ) => {
    const val = e.target.checked;
    mnaps.setChecked!(val, ind);
  };

  return (
    <Stack
      pb={{ xs: "1rem", md: "2rem" }}
      direction={{ md: "row" }}
      rowGap={"0.5rem"}
      justifyContent={{ md: "space-between" }}
    >
      <Typography
        fontSize="1rem"
        fontWeight="600"
        sx={
          dir === "AR" ? { order: 2, color: "#375165" } : { color: "#375165" }
        }
        slotProps={{
          root: {
            dir: dir === "AR" ? "rtl" : "ltr",
          },
        }}
      >
        {lang.include.mainText}
      </Typography>
      <Stack
        direction="row"
        gap={{ xs: "0.5rem", md: "0.77rem" }}
        flexWrap="wrap"
      >
        <Checkbox
          onChange={(e) => handleSetChecked(e, CheckboxIndex.ABCB)}
          sx={psgCheckboxSx}
          label={lang.include.options[0]}
          checked={mnaps.BigAbc}
        />
        {lang.include.options[1] === "" ? (
          ""
        ) : (
          <Checkbox
            onChange={(e) => handleSetChecked(e, CheckboxIndex.ABCS)}
            sx={{
              fontSize: { xs: "0.813rem", md: "0.84615rem" },
              color: "#375165",
            }}
            label={lang.include.options[1]}
            checked={mnaps.SmallAbc} // Default checked
          />
        )}
        <Checkbox
          onChange={(e) => handleSetChecked(e, CheckboxIndex.NUM)}
          sx={psgCheckboxSx}
          label={lang.include.options[2]}
          checked={mnaps.Numbers}
        />
        <Checkbox
          onChange={(e) => handleSetChecked(e, CheckboxIndex.SYMB)}
          sx={psgCheckboxSx}
          label="@#!"
          checked={mnaps.Symbols}
        />
      </Stack>
    </Stack>
  );
};

export default Down;
