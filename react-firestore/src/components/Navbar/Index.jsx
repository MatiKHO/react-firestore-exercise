import ThemeToggleButton from "../ThemeMode/Index";

import { NavLink, Outlet } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const NavbarComponent = () => {
  const pages = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Add Songs",
      path: "/add-songs",
    },

    {
      name: "Songs",
      path: "/songs",
    },
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                href="/"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Songify
              </Link>
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 4 }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page.path}
                  to={page.path}
                  style={{ textDecoration: "none" }}
                  end
                >
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <ThemeToggleButton />
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
};

export default NavbarComponent;
