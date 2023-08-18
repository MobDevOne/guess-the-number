import { Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getUserCredentials = () => {
        window.location.href = "username"
    }

    return (
        <Box >
            <Typography textAlign="center" sx={{ mt: '75px', fontFamily: 'QuinqueFive', fontSize: 20 }}>
                Welcome to "Guess The Number" <br /> by MobDevOne
            </Typography>
            <Stack className="login" direction="column" spacing={"16px"} sx={{ width: 'fit-content', mt: '75px', alignItems: 'center' }}>
                <TextField label="Username" autoComplete="off" variant="outlined" sx={{ width: '15em' }}/>
                <TextField label="Password" autoComplete="off" type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} sx={{ width: '15em' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" onClick={getUserCredentials} sx={{ textTransform: 'none', fontFamily: 'QuinqueFive', fontSize: 10 }}>
                    Log in
                </Button>
                <Link href="/register" sx={{ fontFamily: 'QuinqueFive', fontSize: 8 }}>
                    Not registered yet? create an account
                </Link>
            </Stack>
        </Box>
    );
}