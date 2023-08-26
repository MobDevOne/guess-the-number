import { Box, Button, Typography} from "@mui/material";
import { GameStartApi } from "../apis/GameApi";


export function Home() {

    const username = localStorage.getItem('username')

    const handleGameStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sessionToken = localStorage.getItem('sessionToken')
        GameStartApi(sessionToken!!)(e)
        .then(async (response) => {
            return response.statusCode
        }).catch((statusCode) => {
            if (statusCode === 200) {
                window.location.href = `/game`;
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
        <Button href="/:username/game" sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Easy Mode
        </Button>
        <Button variant="contained" onClick={handleGameStart} sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Normal Mode
        </Button>
        <Button href="/:username/game" sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Hard Mode
        </Button>
       </Box>
    );
}