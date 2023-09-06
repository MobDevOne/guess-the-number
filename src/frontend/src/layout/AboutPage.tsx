import icon from "../pictures/MobDevOneIcon.png";
import { Paper, Typography } from "@mui/material";


const AboutPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper elevation={10} sx={{ mt: 6, p: 2, height: "auto", width: "500px", backgroundColor: "rgba(255, 255, 255, 0.8)"}} >
                <Typography variant="h4" gutterBottom >
                    About Our "Guess the Number" School Project
                </Typography>
                <Typography variant="body1">
                    Welcome to the About page of our school project, "Guess the Number," by our Team <img className="icon" src={icon} alt="icon" style={{ width: "20px", verticalAlign: "middle" }} /> MobDevOne.
                </Typography>
                <Typography variant="body1">
                    This project was developed as part of our school curriculum to demonstrate our programming and problem-solving skills.
                    The "Guess the Number" game is a classic and fun game that challenges players to guess a randomly generated number within a certain range.
                </Typography>
                <Typography variant="body1">
                    Key features of our project include:
                    <ul>
                        <li>Random number generation within a specified range.</li>
                        <li>User-friendly interface with clear instructions.</li>
                        <li>Feedback to let players know if their guess is too high or too low.</li>
                        <li>Score tracking to record the number of attempts taken to guess the correct number.</li>
                    </ul>
                </Typography>
                <Typography variant="body1">
                    We hope you enjoy playing our "Guess the Number" game and find it both entertaining and challenging.
                    If you want, <br/> you can follow us on <a href="https://github.com/MobDevOne" target="_blank" rel="noreferrer">GitHub</a>
                    <br/>
                    Thank you for visiting our project's About page!
                </Typography>
            </Paper>
        </div>
    );
};

export default AboutPage;