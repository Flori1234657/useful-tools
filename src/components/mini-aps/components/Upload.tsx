import { Stack } from "@mui/joy";
import UploadBtn from "./UploadBtn";

const Upload = (props: { btnTitle: string; bckgImg: string }) => {
  return (
    <Stack
      mt={{ xs: "1rem", md: "1.5rem" }}
      height="10rem"
      justifyContent="center"
      alignItems="center"
      sx={{
        border: "0.125rem dashed #375165",
        borderRadius: "0.75rem",
        backgroundImage: `url(${props.bckgImg})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: { md: "20.15385rem" },
      }}
    >
      <UploadBtn title={props.btnTitle} />
    </Stack>
  );
};

export default Upload;
