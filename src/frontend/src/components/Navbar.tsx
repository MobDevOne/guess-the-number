import { Tab, Tabs } from "@mui/material"
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { useHighScoresApi } from "../apis/HighScoresApi";

export const NavBar = () => {

    const currentLocation = useLocation()
    const [tabValue, setTabValue] = useState("game");
    const username = localStorage.getItem('username')

    const checkLocation = window.location.pathname.startsWith(`/${username}`)

    const handleHighScores = (e: React.MouseEvent<HTMLButtonElement>) => {
        useHighScoresApi()(e)
            .then(async (response) => {
                return response
            }).then((sessionToken) => {
                localStorage.setItem('', JSON.stringify([{
                    username: username,
                    sessionToken: sessionToken
                }]));
            }).catch((statusCode) => {
                if (statusCode === 200) {
                    window.location.href = `high-scores`;
                }
            })
    }

    useEffect(() => {
        let location = currentLocation.pathname

        if (location.startsWith("/:username/game")) {
            setTabValue("game")
        } else if (location.startsWith("/:username/high-scores")) {
            setTabValue("high-scores")
        } else {
            setTabValue("username")
        }
    }, [currentLocation])

    return checkLocation ? ( 
        <Box className="navbar" display="flex" justifyContent="center" >
            <Tabs value={tabValue} sx={{justifyContent: 'center', fontSize: 10, fontFamily: 'QuinqueFive'}}>
                <Tab component={Link} to="username" label="Home" value="username"/>
                <Tab component={Link} to="username/game" label="Game" value="game"/>
                <Tab component={Link} to="/high-scores" label="High-Scores" value="high-scores"/>
            </Tabs>
        </Box>
    ) : (
        <>
        </>
    )
}