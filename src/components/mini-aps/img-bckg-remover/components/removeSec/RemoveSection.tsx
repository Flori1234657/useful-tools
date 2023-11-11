import { Stack, AspectRatio } from "@mui/joy";
import TitleAndExitBtn from "../../../components/TitleAndExitBtn";
import ThreeBtnsSection from "./ThreeBtnsSection";
import Placeholder from "../../../../../assets/images/mini-apps/placeholderImg.jpg";

const RemoveSection = () => {
  return (
    <>
      <TitleAndExitBtn title="Remove image background" />
      <Stack
        direction={{ md: "row" }}
        alignItems="center"
        mt={{ xs: "1rem", md: "1.5rem" }}
        sx={{ columnGap: { md: "1.31rem" } }}
      >
        <AspectRatio
          objectFit="cover"
          sx={{
            borderRadius: "0.75rem",
            width: { xs: "100%", md: "16.07692rem" },
            boxShadow: "lg",
          }}
        >
          <img src={Placeholder} alt="Resized image" />
        </AspectRatio>
        <ThreeBtnsSection />
      </Stack>
    </>
  );
};

export default RemoveSection;
