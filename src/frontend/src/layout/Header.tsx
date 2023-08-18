import {
  AppBar,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import icon from "../pictures/MobDevOne192.png";
import { useState } from "react";
import AccountMenu from "../components/AccountMenu";

export function Header() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="header" sx={{ bgcolor: "#262626" }}>
      <Stack sx={{ ml: "8px" }}>
        <Toolbar disableGutters>
          <a href="http://localhost:3000/">
            <img className="icon" src={icon} alt="icon" />
          </a>
          <Typography variant="h6" component="a" href="http://localhost:3000/" sx={{ textDecoration: "none", fontFamily: "revert", fontWeight: 700, fontSize: "30pt", color: "inherit", ml: "8px", mb: "4px" }}>
            | Guess The Number
          </Typography>
          <div style={{ flexGrow: 0.98 }} />
            <AccountMenu/>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}