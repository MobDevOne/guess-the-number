import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import icon from "../pictures/MobDevOne192.png";
import AccountMenu from "./AccountMenu";
import { useState, useEffect } from "react";

export function Header() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const username = sessionStorage.getItem('username')
  const isLoggedIn = sessionStorage.getItem('username') !== null

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const vertLine = {
    borderLeft: "4px solid white",
    height: "46px",
    marginLeft: "8px",
    marginRight: "8px",
  };

  return (
    <AppBar position="static" className="header" sx={{ bgcolor: "#262626" }}>
      <Stack sx={{ ml: "8px" }}>
        <Toolbar disableGutters>
          <a href="https://github.com/MobDevOne" target="_blank" rel="noreferrer">
            <img className="icon" src={icon} alt="icon" />
          </a>
          <div style={vertLine} />
          <Typography variant="h6" component="a" href={isLoggedIn ? `/u/${username}` : "/"} sx={{ textDecoration: "none", fontFamily: "revert", fontWeight: 700, fontSize: "30pt", color: "inherit"}}>
            {windowWidth < 700 ? "GTN" : "Guess The Number"}
          </Typography>
          <div style={{ flexGrow: 0.98 }} />
          <AccountMenu />
        </Toolbar>
      </Stack>
    </AppBar>
  );
}

