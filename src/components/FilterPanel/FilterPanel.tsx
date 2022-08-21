import PropTypes from 'prop-types';
import { Paper, Rating } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import {
    setRatingFilter,
    incrementFilter,
    decrementFilter,
} from 'components/FilterPanel/filterSlice';
import QuantityFilter from 'components/FilterPanel/QuantityFilter';

interface Props {
    disabled?: boolean;
}

const FilterPanel = ({ disabled }: Props) => {
    const dispatch = useAppDispatch();
    const { rating, adults, children } = useAppSelector(({ filter }) => filter);

    return (
        <Paper
            elevation={0}
            sx={{
                marginTop: (theme) => theme.spacing(2),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Rating
                aria-label="Filter Panel Rating"
                value={rating}
                onChange={(event, newValue) => {
                    dispatch(setRatingFilter(newValue));
                }}
                sx={{
                    marginX: (theme) => theme.spacing(2),
                }}
                disabled={disabled}
            />
            <QuantityFilter
                label="Adults:"
                value={adults || 0}
                increment={() =>
                    dispatch(incrementFilter({ filterName: 'adults' }))
                }
                decrement={() =>
                    dispatch(decrementFilter({ filterName: 'adults' }))
                }
                disabled={disabled}
            />
            <QuantityFilter
                label="Children:"
                value={children || 0}
                increment={() =>
                    dispatch(incrementFilter({ filterName: 'children' }))
                }
                decrement={() =>
                    dispatch(decrementFilter({ filterName: 'children' }))
                }
                disabled={disabled}
            />
        </Paper>
    );
};

FilterPanel.propTypes = {
    disabled: PropTypes.bool,
};

export default FilterPanel;
