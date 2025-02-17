import PostComponent from "../components/Post/Index";
import { Box, Typography } from "@mui/material";

 const AddSong = () => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        gap: 3,
        py: 2,
        
      }}>
        <Typography variant="h4">Add a new song!</Typography>

        <PostComponent/>


    </Box>
  )
};

export default AddSong;
