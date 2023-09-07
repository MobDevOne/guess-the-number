import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
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
        setUsername(event.target.value);
    };

    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        const calculatedHash = hashAlgorithm(password);
        setHashedPassword(calculatedHash);
    };

    const getConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getUserCredentials = (e: React.MouseEvent<HTMLButtonElement>) => {
        setHttpStatusCode(undefined)
        RegisterApi(username, hashedPassword)(e)
            .then(async (sessionId) => {
                return sessionId
            }).then((sessionId) => {
                localStorage.setItem('username', username);
                localStorage.setItem('sessionId', sessionId);
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
                <TextField label="Username" autoComplete="off" variant="outlined" value={username} onChange={getUsername} sx={{ width: '15em' }} />
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
                <TextField
                    label="Confirm Password"
                    helperText={isPasswordSame ? <></> : <span style={{ color: 'red' }}>Passwords are not identical</span>}
                    autoComplete="off" 
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
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
                <Button variant="contained" onClick={getUserCredentials} disabled={!isButtonDisabled} sx={{ textTransform: 'none', fontSize: 10, fontFamily: 'QuinqueFive' }}>
                    Create Account
                </Button>
                <ErrorHandling httpStatusCode={httpStatusCode} />
            </Stack>
        </Box>
    );
}

export default RegisterPage;