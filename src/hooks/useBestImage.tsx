import { useEffect, useState } from "react";
import { Language } from "../ts/types/lang";

interface Props {
  dependency?: Language;
  path: string;
}

const useBestImage = (props: Props) => {
  const [bestImage, setBestImage] = useState<string>("");

  useEffect(() => {
    import(`${props.path}` /* @vite-ignore */)
      .then((img) => setBestImage(img.default))
      .catch((err) => console.log(err));
  }, [props.dependency]);

  return bestImage;
};

export default useBestImage;
