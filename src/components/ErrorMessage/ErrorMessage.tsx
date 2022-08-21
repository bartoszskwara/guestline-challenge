import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

interface Props {
    label: string;
}

const ErrorMessage = ({ label }: Props) => (
    <Typography
        variant="regular"
        sx={{
            marginY: (theme) => theme.spacing(2),
            color: (theme) => theme.palette.warning.main,
            display: 'flex',
            justifyContent: 'center',
        }}
    >
        {label}
    </Typography>
);

ErrorMessage.propTypes = {
    label: PropTypes.string.isRequired,
};

export default ErrorMessage;
