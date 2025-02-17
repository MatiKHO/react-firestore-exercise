import { Box } from "@mui/material"
import HomeComponent from "../components/Home/Index";

 const Home = () => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
        height: "90vh",
      }}>

    <HomeComponent/>

    </Box>
    
  )
}

export default Home;
