import useTool from "../../../hooks/mini-apps/useTool";
import Loader from "../../loading/Loader";

const ToolModal = (props: { modalCredentials: string }) => {
  const tool = useTool(props.modalCredentials);

  return tool ? tool : <Loader />;
};

export default ToolModal;
