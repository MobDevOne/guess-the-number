import { Box, Button, Stack, Tab, Tabs, TextField, Typography } from "@mui/material"
import { preventOverflow } from "@popperjs/core";
import { Link, NavLink, useLocation } from "react-router-dom";

export const GamePage = () => {

    const handleInput = (event: any) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    };

    return (
        <Box>
            <Stack className="login" direction="column" spacing={"16px"} sx={{ width: 'fit-content', pt: '75px', alignItems: 'center' }}>
                <TextField label="Enter a number" autoComplete="off" variant="outlined" InputProps={{
                    inputMode: 'numeric', // Set the input mode to allow only numbers
                    onInput: handleInput, // Attach the input handler to filter out non-numeric characters
                }} sx={{ width: '15em' }}
                />
                <Button variant="contained" sx={{ fontSize: 10, fontFamily: 'QuinqueFive' }}>
                    Guess
                </Button>
            </Stack>
        </Box>
    );
}