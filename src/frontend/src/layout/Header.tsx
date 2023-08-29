import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import icon from "../pictures/MobDevOne192.png";
import AccountMenu from "../components/AccountMenu";

export function Header() {

  return (
    <AppBar position="static" className="header" sx={{ bgcolor: "#262626" }}>
      <Stack sx={{ ml: "8px" }}>
        <Toolbar disableGutters>
          <a href="https://github.com/MobDevOne" target="_blank" rel="noreferrer">
            <img className="icon" src={icon} alt="icon" />
          </a>
          <Typography variant="h6" component="a" href="/" sx={{ textDecoration: "none", fontFamily: "revert", fontWeight: 700, fontSize: "30pt", color: "inherit", ml: "8px", mb: "4px" }}>
            | Guess The Number
          </Typography>
          <div style={{ flexGrow: 0.98 }} />
          <AccountMenu />
        </Toolbar>
      </Stack>
    </AppBar>
  );
}