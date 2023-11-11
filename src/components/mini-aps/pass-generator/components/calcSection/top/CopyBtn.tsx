import { Button } from "@mui/joy";
import { IoCopy, IoCheckmarkDoneOutline as Checked } from "react-icons/io5";
import { IconContext } from "react-icons";
import { copyTextToClipboard } from "../../../../../../utils/mini-apps/copyToClipboard";
import useIconChange from "../../../../../../hooks/mini-apps/useIconChange";
import { useMainStore } from "../../../../../../state/mainState";
import { useMiniAppsStore } from "../../../../../../state/miniAppsState";

type Props = {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

const CopyBtn = (props: Props) => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText);
  const dir = useMainStore((state) => state.language.nav.lang.chosen);
  const grPass = useMiniAppsStore((st) => st.psg.generatedPassword);

  const { toggleFirstIcon, setToggleFirstIcon } = useIconChange(800);

  return (
    <IconContext.Provider
      value={{ className: "tools__panel__cards-grid__copy-btn-animation" }}
    >
      <Button
        disabled={grPass === "" ? true : false}
        color="neutral"
        sx={{
          borderRadius: "0.75rem",
          fontSize: { xs: "0.813rem", md: "0.84615rem" },
        }}
        endDecorator={
          dir !== "AR" ? toggleFirstIcon ? <IoCopy /> : <Checked /> : ""
        }
        startDecorator={
          dir === "AR" ? toggleFirstIcon ? <IoCopy /> : <Checked /> : ""
        }
        onClick={() => {
          if (props.inputRef === null) return;
          copyTextToClipboard(props.inputRef.current!.value).then(() => {
            setToggleFirstIcon(false);
          });
        }}
      >
        {lang.input.copyBtn}
      </Button>
    </IconContext.Provider>
  );
};

export default CopyBtn;
