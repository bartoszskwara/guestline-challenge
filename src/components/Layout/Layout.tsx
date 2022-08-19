import React from 'react';
import { Outlet } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Box, IconButton, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import { toggleTheme } from 'app/ThemeProvider/themeSlice';

const Layout = () => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(({ theme }) => theme);
    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    height: (theme) => theme.spacing(20),
                    background: (theme) => theme.palette.accent.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <IconButton
                    onClick={() => dispatch(toggleTheme())}
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        color: (theme) => theme.palette.accent.contrastText,
                    }}
                >
                    {mode === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
                </IconButton>
                <Typography
                    variant="regular"
                    component="p"
                    sx={{
                        fontSize: (theme) => theme.spacing(5),
                        color: (theme) => theme.palette.accent.contrastText,
                    }}
                >
                    Guestline Challenge
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    background: (theme) => theme.palette.background.secondary,
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
