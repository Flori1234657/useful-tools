import { Card, CardContent, Typography } from "@mui/joy";

const TestingCard = () => {
  return (
    <Card
      variant="solid"
      sx={{
        my: { xs: "1.5rem" },
        width: { md: "13.53846rem" },
        height: { md: "7.76923rem" },
        aspectRatio: { xs: "2/1", md: "auto" },
        ml: { md: "2.31rem" },
      }}
    >
      <CardContent sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography level="title-md" textColor="inherit">
          Very nice!
        </Typography>
        <Typography textColor="inherit" fontSize="1.188rem" fontWeight="bold">
          8.34
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestingCard;
