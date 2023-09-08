import { Box, Button, Typography } from "@mui/material";
import { GameStartApi } from "../apis/GameApi";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    const username = sessionStorage.getItem('username')
    const navigate = useNavigate()


    const handleGameStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sessionId = sessionStorage.getItem('sessionId')
        GameStartApi(sessionId!!)(e)
        navigate(`./game`);
    }

    const handleHighscores = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(`/u/${username}/highscores`);     
    }

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Typography sx={{ fontSize: 16, fontFamily: 'QuinqueFive', textAlign: 'center', mt: '50px', mb: '50px' }}>
                Welcome {username} <br /> What do you want to do today?
            </Typography>
            <Button variant="contained" onClick={handleGameStart} sx={{ fontFamily: 'QuinqueFive', fontSize: 10 }}>
                Play a Game
            </Button>
            <Typography sx={{ fontSize: 16, fontFamily: 'QuinqueFive', textAlign: 'center', mt: '16px' }}>
                or
            </Typography>
            <Button variant="contained" onClick={handleHighscores} sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
                view Highscores
            </Button>
        </Box>
    );
}

export default HomePage;