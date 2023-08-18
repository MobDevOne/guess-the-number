import { Box, Button, Stack, Tab, Tabs, TextField, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom";

export const GamePage = () => {

    const location = useLocation();

    const handleInput = (event: any) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    };

    return (
        <Box className="gamePage" sx={{ height: '100vh' }}>
            <Tabs value={location.pathname} sx={{justifyContent: 'center'}} >
                <Tab label="Game" value="game" component={Link} to=":username/game" />
                <Tab label="High-Scores" value="high-scores" component={Link} to=":username/high-scores" />
            </Tabs>
            <Stack className="login" direction="column" spacing={"16px"} sx={{ width: 'fit-content', mt: '75px', alignItems: 'center' }}>
                <TextField label="Enter a number" autoComplete="off" variant="outlined" InputProps={{
                    inputMode: 'numeric', // Set the input mode to allow only numbers
                    onInput: handleInput, // Attach the input handler to filter out non-numeric characters
                }} sx={{ width: '15em' }}
                />
                <Button variant="contained" sx={{ fontSize: 10, fontFamily: 'QuinqueFive' }}>
                    Guess
                </Button>
            </Stack>
        </Box>
    );
}