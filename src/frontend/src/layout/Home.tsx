import { Box, Button, Typography } from "@mui/material";
import { GameStartApi } from "../apis/GameApi";
import { HighScoreApi } from "../apis/HighScoresApi";
import { useNavigate } from "react-router-dom";


export function Home() {

    const username = localStorage.getItem('username')

    const navigate = useNavigate()
    

    const handleGameStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sessionToken = localStorage.getItem('sessionToken')
        GameStartApi(sessionToken!!)(e)
        .then(async (response) => {
            return response.statusCode
        }).catch((statusCode) => {
            if (statusCode === 200) {
                navigate(`./game`);
            }
        })
    }

    const handleHighScores = (e: React.MouseEvent<HTMLButtonElement>) => {
        HighScoreApi()(e)
        .then(async (response) => {
            return response.statusCode
        }).catch((statusCode) => {
            if (statusCode === 200) {
                navigate(`./high-scores`);
            }
        })
    }

    return (
       <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography sx={{ fontSize: 16, fontFamily: 'QuinqueFive', textAlign: 'center', mt: '50px' }}>
            Welcome Back {username} <br/> What do you want to do today?
        </Typography>
        <Typography sx={{ fontSize: 16, fontFamily: 'QuinqueFive', textAlign: 'center', mt: '50px' }}>
            Choose your game mode
        </Typography>
        <Button variant="contained" onClick={handleGameStart} sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Play Game
        </Button>
        <Button variant="contained" onClick={handleHighScores} sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            High Scores
        </Button>
       </Box>
    );
}