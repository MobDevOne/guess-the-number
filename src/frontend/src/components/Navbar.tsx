import { Tab, Tabs } from "@mui/material"
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

export const NavBar = () => {

    const currentLocation = useLocation()
    const [tabValue, setTabValue] = useState("game");
    const username = localStorage.getItem('username')
    const navigate = useNavigate()

    const checkLocation = useLocation().pathname.startsWith(`/${username}`)

    /*const handleHighScores = (e: React.MouseEvent<HTMLButtonElement>) => {
        useHighScoresApi()(e)
            .then(async (response) => {
                return response
            }).then((sessionId) => {
                localStorage.setItem('', JSON.stringify([{
                    username: username,
                    sessionId: sessionId
                }]));
            }).catch((statusCode) => {
                if (statusCode === 200) {
                    navigate(`/highscores`);
                }
            })
    }*/

    useEffect(() => {
        let location = currentLocation.pathname

        if (location.startsWith("/:username/game")) {
            setTabValue("game")
        } else if (location.startsWith("/:username/highscores")) {
            setTabValue("highscores")
        } else {
            setTabValue("username")
        }
    }, [currentLocation])

    return checkLocation ? (
        <Box className="navbar" display="flex" justifyContent="center" >
            <Tabs value={tabValue} sx={{ justifyContent: 'center', fontSize: 10, fontFamily: 'QuinqueFive' }}>
                <Tab component={Link} to="username" label="Home" value="username" />
                <Tab component={Link} to="username/game" label="Game" value="game" />
                <Tab component={Link} to="/highscores" label="HighScores" value="highscores" />
            </Tabs>
        </Box>
    ) : (
        <>
        </>
    )
}