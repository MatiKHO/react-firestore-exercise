import NavbarComponent from "../components/Navbar/Index";
import Home from "../routes/Home";
import AddSong from "../routes/AddSong";
import Songs from "../routes/Songs";


import { UIProvider } from "../context/UIContext";
import { Routes, Route } from "react-router";


const App = () => {
  return (
    <UIProvider>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-songs" element={<AddSong />} />
        <Route path="songs" element={<Songs />} />
      </Routes>
    </UIProvider>
  );
};

export default App;
