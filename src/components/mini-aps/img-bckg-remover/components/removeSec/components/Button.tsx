import { Button } from "@mui/joy";
import { useMiniAppsStore } from "../../../../../../state/miniAppsState";
import { produce } from "immer";
import { MiniAppsStore } from "../../../../../../ts/interface/miniAppsState";

const Btn = (props: { txt: string; dwPath?: string | null }) => {
  const handleDownload = () => {
    if (props.dwPath) {
      const a = document.createElement("a");
      a.href = props.dwPath;
      a.download = "removed_background.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <Button
      sx={{
        borderRadius: "0.75rem",
        fontSize: { xs: "0.813rem" },
        width: { xs: "100%", md: "auto" },
      }}
      href={props.dwPath ? "props.dwPath" : ""}
      download="removed_background.png"
      onClick={() =>
        props.dwPath
          ? handleDownload()
          : useMiniAppsStore.setState(
              produce((state: MiniAppsStore) => {
                state.imr.imgDownloadPath = null;
              })
            )
      }
    >
      {props.txt}
    </Button>
  );
};

export default Btn;
