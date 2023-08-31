import { Box, Button, Card, TextField, Typography } from "@mui/material"
import ProfOak from "../pictures/Prof. Oak.png"
import { GameApi } from "../apis/GameApi";
import { useState } from "react";

export const GamePage = () => {

    const [guess, setGuess] = useState<string>()

    const handleInput = (event: any) => {
        setGuess(event.target.value.replace(/[^0-9]/g, '')); // Remove non-numeric characters
    };

    const sendGuess = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sessionId = localStorage.getItem('sessionId')
        const random_number = parseInt(guess!!, 10)
        GameApi(sessionId!!, random_number!!)(e)
        .then(async (responseData) => {
            return responseData
        }).then(() => {
            
        })
    }

    return (
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" sx={{ width: 'fit-content', mt: '150px', mx: 'auto' }}>
            <Card sx={{ maxWidth: '150px', p: '15px' }}>
                <Typography sx={{ fontSize: 10, fontFamily: 'QuinqueFive', textAlign: 'center' }}>
                    What number am i thinking of?
                </Typography>
            </Card>
            <img className="profOak" src={ProfOak} alt="Guess his number" />
            <TextField label="Enter a number" autoComplete="off" variant="outlined" value={guess} onChange={handleInput} sx={{ width: '15em', mt: '16px' }}
            />
            <Button variant="contained" onClick={sendGuess} sx={{ fontSize: 10, fontFamily: 'QuinqueFive', mt: '16px' }}>
                Guess
            </Button>
        </Box>
    );
}