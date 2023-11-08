import { lazy, Suspense } from "react";
import Loader from "../../loading/Loader";

const ToolModal = (props: { modalCredentials: string }) => {
  const Component = lazy(
    () => import(`../../mini-aps/${props.modalCredentials}.tsx`)
  );

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default ToolModal;
