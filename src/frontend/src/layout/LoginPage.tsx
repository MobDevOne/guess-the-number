import { Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
import { LoginApi } from "../apis/LoginApi";
import { ErrorHandling } from "../components/ErrorHandling";
import { useNavigate } from "react-router-dom";
import { hashAlgorithm } from "../components/hashAlgorithm";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [hashedPassword, setHashedPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [httpStatusCode, setHttpStatusCode] = useState<number>()

    const isButtonDisabled = password === "" || username === "";

    const navigate = useNavigate()

    const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value.replace(/[^a-zA-Z0-9-_]/g, ''));
    };

    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        const calculatedHash = hashAlgorithm(password.trim());
        setHashedPassword(calculatedHash);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          document.getElementById('login')?.click();
        }
      };

    const getUserCredentials = (e: React.MouseEvent<HTMLButtonElement>) => {
        setHttpStatusCode(undefined)
        LoginApi(username.trim(), hashedPassword)(e)
            .then(async (sessionId) => {
                return sessionId
            }).then((sessionId) => {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('sessionId', sessionId);
                setUsername('')
                setPassword('')
                navigate(`/u/${username}`)
            }).catch((statusCode) => {
                setHttpStatusCode(statusCode)
            })
    };

    return (
        <Box >
            <Typography textAlign="center" sx={{ mt: '75px', fontFamily: 'QuinqueFive', fontSize: 20 }}>
                Welcome to "Guess The Number" <br /> by MobDevOne
            </Typography>
            <Stack className="login" direction="column" spacing={"16px"} sx={{ width: 'fit-content', mt: '75px', alignItems: 'center' }}>
                <TextField 
                label="Username" 
                autoComplete="off" 
                value={username} 
                onKeyDown={handleKeyPress} 
                onChange={getUsername} sx={{ width: '15em' }} />
                <TextField label="Password" autoComplete="off" type={showPassword ? 'text' : 'password'} value={password} onKeyDown={handleKeyPress} onChange={getPassword} sx={{ width: '15em' }}
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
                <Button id="login" variant="contained" onClick={getUserCredentials} disabled={isButtonDisabled} sx={{ fontFamily: 'QuinqueFive', fontSize: 10 }}>
                    Log in
                </Button>
                <Link href="/register" sx={{ fontFamily: 'QuinqueFive', fontSize: 8 }}>
                    Not registered yet? create an account
                </Link>
                <ErrorHandling httpStatusCode={httpStatusCode} />
            </Stack>
        </Box>
    );
}

export default LoginPage