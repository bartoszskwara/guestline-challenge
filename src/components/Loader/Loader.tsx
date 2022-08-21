import { Box } from '@mui/material';

const Loader = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginY: (theme) => theme.spacing(2),
        }}
    >
        Loading...
    </Box>
);

export default Loader;
