import { Paper, Rating } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import {
    setRatingFilter,
    incrementFilter,
    decrementFilter,
} from 'components/FilterPanel/filterSlice';
import QuantityFilter from 'components/FilterPanel/QuantityFilter';

const FilterPanel = () => {
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
            />
        </Paper>
    );
};

export default FilterPanel;
