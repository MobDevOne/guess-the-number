import { Box, Button, Typography} from "@mui/material";

export function Home() {

    const username = "JeanPtz"

    return (
       <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography sx={{ fontSize: 16, fontFamily: 'QuinqueFive', textAlign: 'center', mt: '50px' }}>
            Welcome Back {username} <br/> What do you want to do today?
        </Typography>
        <Typography sx={{ fontSize: 16, fontFamily: 'QuinqueFive', textAlign: 'center', mt: '50px' }}>
            Choose your game mode
        </Typography>
        <Button href="/username/game" sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Easy Mode
        </Button>
        <Button href="/username/game" sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Normal Mode
        </Button>
        <Button href="/username/game" sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mt: '16px' }}>
            Hard Mode
        </Button>
       </Box>
    );
}