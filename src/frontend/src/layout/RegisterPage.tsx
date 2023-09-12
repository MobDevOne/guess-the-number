import { Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { ErrorHandling } from "../components/ErrorHandling";
import { RegisterApi } from "../apis/RegisterApi";
import { useNavigate } from "react-router-dom";
import { hashAlgorithm } from "../components/hashAlgorithm";

const RegisterPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [httpStatusCode, setHttpStatusCode] = useState<number>()
    const [hashedPassword, setHashedPassword] = useState('');

    const isButtonDisabled = password === confirmPassword && password !== "" && username !== "";
    const isPasswordSame = password === confirmPassword

    const navigate = useNavigate()

    const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value.replace(/[^a-zA-Z0-9-_]/g, ''));
    };

    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        const calculatedHash = hashAlgorithm(password.trim());
        setHashedPassword(calculatedHash);
    };

    const getConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('register')?.click();
        }
    };

    const getUserCredentials = (e: React.MouseEvent<HTMLButtonElement>) => {
        setHttpStatusCode(undefined)
        RegisterApi(username.trim(), hashedPassword)(e)
            .then(async (sessionId) => {
                return sessionId
            }).then((sessionId) => {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('sessionId', sessionId);
                setUsername('')
                setPassword('')
                setConfirmPassword('')
                navigate(`/u/${username}`)
            }).catch((statusCode) => {
                setHttpStatusCode(statusCode)
            })
    };

    return (
        <Box>
            <Typography textAlign="center" sx={{ mt: '75px', fontFamily: 'QuinqueFive', fontSize: 20 }}>
                Create your account!
            </Typography>
            <Stack className="login" direction="column" spacing={"16px"} sx={{ width: 'fit-content', mt: '75px', alignItems: 'center' }}>
                <TextField label="Username" autoComplete="off" variant="outlined" value={username} onKeyDown={handleKeyPress} onChange={getUsername} sx={{ width: '15em' }} />
                <TextField
                    label="Password"
                    autoComplete="off"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onKeyDown={handleKeyPress}
                    onChange={getPassword}
                    sx={{ width: '15em' }}
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
                <TextField
                    label="Confirm Password"
                    helperText={isPasswordSame ? <></> : <span style={{ color: 'red' }}>Passwords are not identical</span>}
                    autoComplete="off"
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onKeyDown={handleKeyPress}
                    onChange={getConfirmPassword}
                    sx={{ width: '15em' }}
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
                <Button id="register" variant="contained" onClick={getUserCredentials} disabled={!isButtonDisabled} sx={{ textTransform: 'none', fontSize: 10, fontFamily: 'QuinqueFive' }}>
                    Create Account
                </Button>
                <Link href="/login" sx={{ fontFamily: 'QuinqueFive', fontSize: 8 }}>
                    Already have an account? log in
                </Link>
                <ErrorHandling httpStatusCode={httpStatusCode} />
            </Stack>
        </Box>
    );
}

export default RegisterPage;