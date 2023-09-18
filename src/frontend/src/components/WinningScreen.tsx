import { Box, Button, Paper, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { GameStartApi } from "../apis/GameApi";


interface WinningScreenProps {
    guess: string;
    attempts: number;
}

export const WinningScreen = ({ guess, attempts }: WinningScreenProps) => {

    const navigate = useNavigate()
    const username = sessionStorage.getItem('username')

    const handleHighscores = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(`/u/${username}/highscores`);
    }

    const handleGameStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sessionId = sessionStorage.getItem('sessionId')
        GameStartApi(sessionId!!)(e)
            .then(async () => {
                window.location.reload();
            })
    }

    const emojiStyle = {
        fontSize: '2em'
    }

    const flippedEmojiStyle = {
        transform: 'scaleX(-1)', // Flip the emoji horizontally
        display: 'inline-block', // Ensure it doesn't affect the entire line
        fontSize: '2em'
    }

    return (
        <Paper elevation={10} sx={{ p: 2, minHeight: "300", minWidth: "300px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box display='flex' flexDirection='column' alignItems="center" textAlign="center">
                <Typography sx={{ fontFamily: 'QuinqueFive', fontSize: 16 }}>
                    <span style={flippedEmojiStyle}>🎉</span> Congratulations <span style={emojiStyle}>🎉</span>
                </Typography>
                <Typography sx={{ fontFamily: 'QuinqueFive', fontSize: "1.5vh", mt: 2 }}>
                    You guessed the right number
                </Typography>
                <Typography sx={{ fontFamily: 'QuinqueFive', fontSize: "1.2vh", mt: 3 }}>
                    The hidden number was {guess} <br /> and it took you {attempts} <br /> tr{attempts === 1 ? "y" : "ies"} to find it
                </Typography>
                <Typography sx={{ fontFamily: 'QuinqueFive', fontSize: "1.0vh", mt: 3 }}>
                    Check out the highscores <br /> To see where you ranked between the other players!
                </Typography>
                <Typography sx={{ fontFamily: 'QuinqueFive', fontSize: "1.0vh", mt: 1 }}>
                    or
                </Typography>
                <Typography sx={{ fontFamily: 'QuinqueFive', fontSize: "1.0vh", mt: 1 }}>
                    you can play again!
                </Typography>
            </Box>
            <Box display='flex' flexDirection='row' alignItems="center" justifyContent="center">
                <Button variant="outlined" onClick={handleGameStart} sx={{ fontFamily: 'QuinqueFive', fontSize: 10, mr: 4 }}>
                    Play Again
                </Button>
                <Button variant="contained" onClick={handleHighscores} sx={{ fontFamily: 'QuinqueFive', fontSize: 10 }}>
                    Highscores
                </Button>
            </Box>
        </Paper>
    )
}