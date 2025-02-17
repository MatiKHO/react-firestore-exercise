import { Box, Typography } from "@mui/material";

import ListComponent from "../components/List/Index";

 const SongsComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 3,
        py: 2,
      }}
    >
      <Typography variant="h4">List of songs</Typography>
      <ListComponent />
    </Box>
  );
};

export default SongsComponent;
