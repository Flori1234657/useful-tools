import React from "react";
import axios from "axios";
import { RmvBgHookReturn } from "../../../../ts/types/mini-apps/IMR/rmvBgHook";
import { useMiniAppsStore } from "../../../../state/miniAppsState";
import { useMainStore } from "../../../../state/mainState";

const useRemoveBg = (): RmvBgHookReturn => {
  const handleRemoveBackground = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files || e.target.files.length === 0) return;

    try {
      const formData = new FormData();
      formData.append("image_file", e.target.files[0]);

      useMainStore.setState(() => ({ loading: true }));

      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_KEY_REMOVE_BG,
          },
          responseType: "blob",
        }
      );

      /**
       # InshaaAllah
          Create an image locally 
          from binary data that we 
          take from response.
      
        *First we need a blob object that takes 2 parameters
           arr:data that we have(img converted to binary string),
           type:MIME type of the data contained in the Blob
       */
      const blob = new Blob([response.data], { type: "image/png" });

      /**
          Then we use the down func to create a local
          version of the image(object URL) we get from 
          the API InshaaAllah
       */
      const dataUrl = URL.createObjectURL(blob);

      useMiniAppsStore.setState(() => ({
        imr: {
          cleanup: () => {
            URL.revokeObjectURL(dataUrl);
          },
          imgDownloadPath: dataUrl,
        },
      }));

      useMainStore.setState(() => ({ loading: false }));
    } catch (error) {
      console.error("Error removing background:", error);
      useMainStore.setState(() => ({
        loading: false,
      }));
    }
  };

  return {
    removeBg: handleRemoveBackground,
  };
};

export default useRemoveBg;
