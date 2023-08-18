import { Box, Tab, Tabs } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export function Home() {

    return (
       <Box className="homePage" sx={{ height: '100vh' }}>
        <Tabs>
            <Tab label="Game" value="game" component={NavLink} to="game" />
            <Tab label="High-Scores" value="high-scores" component={NavLink} to="high-scores" />
        </Tabs>
       </Box>
    );
}