import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material"
import ProfOak from "../pictures/Prof. Oak.png"

export const GamePage = () => {

    const handleInput = (event: any) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    };

    return (
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" sx={{ width: 'fit-content', mt: '150px', mx: 'auto' }}>
            <Card sx={{ maxWidth: '150px', p: '15px' }}>
                <Typography sx={{ fontSize: 10, fontFamily: 'QuinqueFive', textAlign: 'center' }}>
                    What number am i thinking of?
                </Typography>
            </Card>
            <img className="profOak" src={ProfOak} alt="Guess his number" />
            <TextField label="Enter a number" autoComplete="off" variant="outlined" InputProps={{
                inputMode: 'numeric', // Set the input mode to allow only numbers
                onInput: handleInput, // Attach the input handler to filter out non-numeric characters
            }} sx={{ width: '15em', mt: '16px' }}
            />
            <Button variant="contained" sx={{ fontSize: 10, fontFamily: 'QuinqueFive', mt: '16px' }}>
                Guess
            </Button>
        </Box>
    );
}