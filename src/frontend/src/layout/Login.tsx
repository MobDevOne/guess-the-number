import { Box, Button, Stack, TextField, Typography, autocompleteClasses } from "@mui/material";

export function Login() {

    const getUserCredentials = () => {

    }

    return(
        <Box >
            <Stack className="login" direction="column" spacing={"8px"} sx={{maxWidth: '400px', mt: '100px', justifyContent: 'center'}}>
                <Typography textAlign="center">
                    Welcome to Guess The Number <br/> by MobDevOne
                </Typography>
                <TextField label="Username" variant="outlined">
                    Username
                </TextField>
                <TextField label="Password" variant="outlined">
                    Password
                </TextField>
                <Button variant="contained" onClick={getUserCredentials}>
                    Log in
                </Button>
                <Button variant="text" href="/register">
                    Not registered yet? create an account
                </Button>
            </Stack>
        </Box>
    );
}