import { Button, Modal, Stack, Typography } from "@mui/joy";
import { useState, useEffect } from "react";
import { useMainStore } from "../../state/mainState";

const Error = () => {
  const [open, setOpen] = useState<boolean>(false);

  const mainStore = useMainStore();
  const errors = useMainStore(
    (state) => state.language.pages.tasks.firstPanel.errors
  );

  useEffect(() => {
    if (mainStore.errors !== "") setOpen(true);
  }, [mainStore.errors]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        width={{ xs: "90.65%", md: "26.4rem", lg: "25rem" }}
        maxWidth={{ xs: "750px", md: "auto" }}
        sx={{ bgcolor: "white", borderRadius: "0.75rem", alignItems: "center" }}
      >
        <Typography
          pt="1em"
          fontSize={{ xs: "1.438rem", md: "1.769rem", lg: "1.438rem" }}
          fontWeight={600}
        >
          {errors.headingErrTxt}
        </Typography>
        <Typography
          fontSize={{ xs: "1rem", md: "1.231rem", lg: "1rem" }}
          textAlign="center"
          mx={{ xs: "1em", md: "1.769rem", lg: "1.438rem" }}
          my="1em"
        >
          {errors.axios.others}
          <br />
          {errors.tryLater}
        </Typography>
        <Button
          sx={{
            width: { xs: "16rem", md: "auto" },
            height: { md: 0 },
            mb: { xs: "1.5rem", md: "1.769rem", lg: "1.438rem" },
            fontSize: { md: "1.231rem", lg: "0.813rem" },
            borderRadius: "0.75rem",
            px: { md: "2em" },
            py: { md: "1em" },
          }}
          color="danger"
          onClick={() => setOpen(false)}
        >
          {errors.closeBtn}
        </Button>
      </Stack>
    </Modal>
  );
};

export default Error;
