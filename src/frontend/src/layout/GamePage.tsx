import { Box, Button, Card, TextField, Typography } from "@mui/material"
import ProfOak from "../pictures/Prof. Oak.png"
import { GameApi } from "../apis/GameApi";
import { useEffect, useState } from "react";
import { WinningScreen } from "../components/WinningScreen";

const GamePage = () => {

    const [guess, setGuess] = useState("")
    const [numberToGuess, setNumberToGuess] = useState("")
    const [attempts, setAttempts] = useState<number>()
    const [guessStatus, setGuessStatus] = useState<number>()
    const [message, setMessage] = useState("What number am i thinking of?")

    const sendGuess = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sessionId = sessionStorage.getItem('sessionId')
        const random_number = parseInt(guess!!, 10)
        GameApi(sessionId!!, random_number!!)(e)
            .then(async (responseData) => {
                return responseData
            }).then((responseData) => {
                setAttempts(responseData.guess_count)
                setGuessStatus(responseData.status)
            })
        setNumberToGuess(guess)
        setGuess('')
    }

    const guessStatusMessage = () => {
        if (guessStatus === -1) {
            setMessage(`Too low try again. Attempts: ${attempts}`)
        }
        else if (guessStatus === 1) {
            setMessage(`Too high try again. Attempts: ${attempts}`)
        }
    }

    useEffect(() => {
        guessStatusMessage()
    }, [attempts, guessStatus])

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('guessButton')?.click();
        }
    };

    return guessStatus !== 0 ? (
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" sx={{ width: 'fit-content', mt: '150px', mx: 'auto' }}>
            <Card sx={{ maxWidth: '150px', p: '15px' }}>
                <Typography sx={{ fontSize: 10, fontFamily: 'QuinqueFive', textAlign: 'center' }}>
                    {message}
                </Typography>
            </Card>
            <a className="profOak" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noreferrer">
                <img src={ProfOak} alt="Guess his number" />
            </a>
            <TextField
                label="Enter a number"
                autoComplete="off"
                variant="outlined"
                value={guess}
                onKeyDown={handleKeyPress}
                onChange={(event) => setGuess(event.target.value.replace(/[^0-9]/g, ''))} // Remove non-numeric characters
                sx={{ width: '15em', mt: '16px' }}
            />
            <Button id="guessButton" variant="contained" onClick={sendGuess} sx={{ fontSize: 10, fontFamily: 'QuinqueFive', mt: '16px' }}>
                Guess
            </Button>
        </Box>
    ) : (
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" sx={{ width: 'fit-content', mt: '150px', mx: 'auto' }}>
            <WinningScreen attempts={attempts!!} guess={numberToGuess} />
        </Box>
    )
}

export default GamePage;