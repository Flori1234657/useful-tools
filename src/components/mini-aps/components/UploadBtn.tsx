import { BiSolidCloudUpload as UploadIcn } from "react-icons/bi";
import Button from "@mui/joy/Button";
import { styled } from "@mui/joy";
import { useMainStore } from "../../../state/mainState";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const UploadBtn = (props: {
  title: string;
  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const loading = useMainStore((state) => state.loading);

  return (
    <Button
      loading={loading}
      component="label"
      role={undefined}
      tabIndex={-1}
      color="primary"
      startDecorator={<UploadIcn />}
      sx={{
        width: { xs: "80%", md: "auto" },
        borderRadius: "0.75rem",
        fontSize: { xs: "0.813rem", md: "0.84615rem" },
        boxShadow: "lg",
      }}
    >
      {props.title}
      <VisuallyHiddenInput type="file" onChange={props.func} />
    </Button>
  );
};

export default UploadBtn;
