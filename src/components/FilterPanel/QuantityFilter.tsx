import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, IconButton, Typography } from '@mui/material';

interface Props {
    label: string;
    value: number;
    increment: () => void;
    decrement: () => void;
    disabled?: boolean;
}

const QuantityFilter = ({
    label,
    value,
    increment,
    decrement,
    disabled,
}: Props) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            marginX: (theme) => theme.spacing(2),
            ...(disabled && { color: (theme) => theme.palette.text.disabled }),
        }}
    >
        <Typography variant="regular">{label}</Typography>
        <IconButton
            aria-label="decrement"
            onClick={decrement}
            size="small"
            sx={{ marginX: (theme) => theme.spacing(0.5) }}
            disabled={disabled}
        >
            <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography variant="regular">{value}</Typography>
        <IconButton
            aria-label="increment"
            onClick={increment}
            size="small"
            sx={{ marginX: (theme) => theme.spacing(0.5) }}
            disabled={disabled}
        >
            <AddIcon fontSize="small" />
        </IconButton>
    </Box>
);

QuantityFilter.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default QuantityFilter;
