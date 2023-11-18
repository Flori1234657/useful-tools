import { Stack, AspectRatio } from "@mui/joy";
import TitleAndExitBtn from "../../../components/TitleAndExitBtn";
import ThreeBtnsSection from "./ThreeBtnsSection";
import { useMiniAppsStore } from "../../../../../state/miniAppsState";
import { useEffect } from "react";

const RemoveSection = () => {
  const rmvdImgSt = useMiniAppsStore((state) => state.imr);
  const errorImg = "https://shorturl.at/lwzP9";

  /**
      Cleanup function to remove 
      the image created locally 
      for saving resources InshaaAllah
   */

  useEffect(() => {
    return () => {
      if (rmvdImgSt.cleanup) {
        rmvdImgSt.cleanup();
        useMiniAppsStore.setState(() => ({
          imr: { imgDownloadPath: null, cleanup: null },
        }));
      }
    };
  });

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
          <img
            src={
              rmvdImgSt.imgDownloadPath ? rmvdImgSt.imgDownloadPath : errorImg
            }
            alt="Resized image"
          />
        </AspectRatio>
        <ThreeBtnsSection />
      </Stack>
    </>
  );
};

export default RemoveSection;
