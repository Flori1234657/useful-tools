/**
    ## Return tool
       Takes tool credentials to 
       know what tool to
       dynamically import
 */

import { useEffect, useState } from "react";
import { useMainStore } from "../../state/mainState";

const useTool = (toolCredential: string | null): JSX.Element | null => {
  if (toolCredential === null) return null;

  const mainStore = useMainStore();

  const [tool, setTool] = useState<JSX.Element | null>(null);

  useEffect(() => {
    mainStore.setLoading(true);

    import(`../../components/mini-aps/${toolCredential}.tsx`)
      .then((state) => {
        mainStore.setLoading(false);
        setTool(state.default as JSX.Element | null);
      })
      .catch(() => {
        mainStore.setErrors(true);
        mainStore.setLoading(false);
      });
  }, [toolCredential]);

  return tool;
};

export default useTool;
