import { Box, Typography } from "@mui/material";


const HomeComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
      }}
    >
        <Typography variant="h4">Welcome to Songify!</Typography>
      
    </Box>
  );
};

export default HomeComponent;
