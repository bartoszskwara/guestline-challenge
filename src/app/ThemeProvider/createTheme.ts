import { PaletteMode } from '@mui/material';
import { createTheme as createThemeMUI } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { dark, light, ThemeType } from './modes';

declare module '@mui/material/styles' {
    interface PaletteOptions extends Partial<ThemeType> {}
    interface Palette extends ThemeType {}
    interface TypeBackground {
        primary: string;
        secondary: string;
    }
    interface TypeText {
        contrastText: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        regular: true;
        medium: true;
        large: true;
    }
}

const makeThemeBasics = (mode: PaletteMode) =>
    createThemeMUI({
        spacing: 10,
        palette: {
            mode,
            ...(mode === 'light' ? light : dark),
        },
    });

const makeThemeTypography = (theme: Theme) =>
    createThemeMUI(theme, {
        typography: {
            regular: {
                fontFamily: 'InterRegular',
                fontSize: theme.spacing(1.4),
            },
            medium: {
                fontFamily: 'InterRegular',
                fontSize: theme.spacing(1.6),
            },
            large: {
                fontFamily: 'InterRegular',
                fontSize: theme.spacing(2),
            },
        },
    });

const createTheme = (mode: PaletteMode = 'dark') => {
    const theme = makeThemeTypography(makeThemeBasics(mode));
    return createThemeMUI(theme, {
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        boxSizing: 'border-box',
                    },
                    elevation0: {
                        padding: theme.spacing(2),
                        borderRadius: 5,
                        [theme.breakpoints.down('md')]: {
                            width: '90%',
                        },
                        [theme.breakpoints.up('md')]: {
                            width: 800,
                        },
                    },
                },
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        color: theme.palette.text.primary,
                        textDecorationColor: theme.palette.text.primary,
                        '&:hover': {
                            color: theme.palette.accent.main,
                        },
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        paddingLeft: 0,
                    },
                },
            },
            MuiBadge: {
                styleOverrides: {
                    badge: {
                        right: 25,
                        top: 6,
                        padding: '0 4px',
                        background: theme.palette.background.primary,
                    },
                },
            },
        },
    });
};

export default createTheme;
