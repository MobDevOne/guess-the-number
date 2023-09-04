import { Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
import { LoginApi } from "../apis/LoginApi";
import { ErrorHandling } from "../components/ErrorHandling";
import { useNavigate } from "react-router-dom";
import { hashAlgorithm } from "../components/hashAlgorithm";

export function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [hashedPassword, setHashedPassword] = useState<number | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [httpStatusCode, setHttpStatusCode] = useState<number>()

    const navigate = useNavigate()

    const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        const calculatedHash = hashAlgorithm(password);
        setHashedPassword(calculatedHash);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getUserCredentials = (e: React.MouseEvent<HTMLButtonElement>) => {
        setHttpStatusCode(undefined)
        console.log(hashedPassword)
        LoginApi(username, hashedPassword)(e)
            .then(async (responseData) => {
                return responseData
            }).then((sessionId) => {
                localStorage.setItem('username', username);
                localStorage.setItem('sessionId', sessionId);
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
                <TextField label="Username" autoComplete="off" value={username} onChange={getUsername} sx={{ width: '15em' }} />
                <TextField label="Password" autoComplete="off" type={showPassword ? 'text' : 'password'} value={password} onChange={getPassword} sx={{ width: '15em' }}
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
                <Button variant="contained" onClick={getUserCredentials} sx={{ fontFamily: 'QuinqueFive', fontSize: 10 }}>
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