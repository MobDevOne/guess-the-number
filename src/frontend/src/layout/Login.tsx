import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export function Login() {

    return(
        <Box >
            <Stack direction="column">
                <Typography className="mainMenu" textAlign='center' sx={{backgroundColor: "transparent"}}>
                    Welcome to Guess The Number <br/> by MobDevOne
                </Typography>
                <TextField variant="outlined" sx={{maxWidth: '300px'}}>
                    Username
                </TextField>
                <TextField variant="outlined" sx={{maxWidth: '300px'}}>
                    Password
                </TextField>
                <Button variant="contained" sx={{maxWidth: '300px'}}>
                    Log in
                </Button>
                <Button variant="text" sx={{maxWidth: '400px'}}>
                    Not registered yet? create an account
                </Button>
            </Stack>
        </Box>
    );
}