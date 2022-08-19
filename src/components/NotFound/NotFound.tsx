import { Box } from '@mui/material';

const NotFound = () => (
    <Box
        sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            margin: (theme) => theme.spacing(5),
        }}
    >
        Page Not Found
    </Box>
);

export default NotFound;
