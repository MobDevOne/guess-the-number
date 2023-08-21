import { Tab, Tabs } from "@mui/material"
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

export const NavBar = () => {

    const currentLocation = useLocation()
    const [tabValue, setTabValue] = useState("game");

    const checkLocation = window.location.pathname.startsWith('/username')

    useEffect(() => {
        let location = currentLocation.pathname

        if (location.startsWith("/username/game")) {
            setTabValue("game")
        } else if (location.startsWith("/username/high-scores")) {
            setTabValue("high-scores")
        } else {
            setTabValue("username")
        }
    }, [currentLocation])

    return checkLocation ? ( 
        <Box display="flex" justifyContent="center" >
            <Tabs className="navbar" value={tabValue} sx={{justifyContent: 'center'}}>
                <Tab component={Link} to="username" label="Home" value="username"/>
                <Tab component={Link} to="username/game" label="Game" value="game"/>
                <Tab component={Link} to="username/high-scores" label="High-Scores" value="high-scores"/>
            </Tabs>
        </Box>
    ) : (
        <>
        </>
    )
}