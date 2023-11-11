import TitleAndExitBtn from "../../../components/TitleAndExitBtn";
import Upload from "../../../components/Upload";
import ImgBckg from "../../../../../assets/images/mini-apps/upl-img.webp";

const UploadSection = () => {
  return (
    <>
      <TitleAndExitBtn title="Remove image background" />
      <Upload btnTitle="Upload Image" bckgImg={ImgBckg} />
    </>
  );
};

export default UploadSection;
