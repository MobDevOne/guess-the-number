import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { AccountCircle, Info } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoutApi } from '../apis/LogoutApi';


export default function AccountMenu() {

    const checkLocation = useLocation().pathname.startsWith('/u')

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAbout = () => {
        navigate('/about')
    }

    const handleLogout = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const sessionId = localStorage.getItem('sessionId');
        LogoutApi(sessionId!!)(e as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>)
            .then(async () => {
                navigate('/');
            });
    }

    return checkLocation ? (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircle sx={{ width: 32, height: 32, color: 'white' }} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleAbout}>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    About
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    ) : (
        <></>
    );
}