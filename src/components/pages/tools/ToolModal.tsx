import { lazy, Suspense, useEffect } from "react";
import Loader from "../../loading/Loader";
import { useMainStore } from "../../../state/mainState";
import { CssVarsProvider } from "@mui/joy";
import { theme } from "./MUI/theme";

const ToolModal = (props: { modalCredentials: string }) => {
  const mainStore = useMainStore();

  useEffect(() => mainStore.setLoading(true), []);

  const Component = lazy(
    () => import(`../../mini-aps/prefixes/${props.modalCredentials}.tsx`)
  );

  return (
    <Suspense fallback={<Loader />}>
      <CssVarsProvider theme={theme}>
        <Component />
      </CssVarsProvider>
    </Suspense>
  );
};

export default ToolModal;
