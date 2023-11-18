import TitleAndExitBtn from "../../../components/TitleAndExitBtn";
import Upload from "../../../components/Upload";
import ImgBckg from "../../../../../assets/images/mini-apps/upl-img.webp";
import { RmvBgHookReturn } from "../../../../../ts/types/mini-apps/IMR/rmvBgHook";
import useRemoveBg from "../../hooks/useRemoveBg";
import { useMainStore } from "../../../../../state/mainState";

const UploadSection = () => {
  const rmvBgHook: RmvBgHookReturn = useRemoveBg();
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.IMR);

  return (
    <>
      <TitleAndExitBtn title={lang.heading} />
      <Upload
        btnTitle={lang.uploadBtn}
        bckgImg={ImgBckg}
        funct={rmvBgHook.removeBg}
      />
    </>
  );
};

export default UploadSection;
