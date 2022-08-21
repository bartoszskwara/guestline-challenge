import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useGetHotelsQuery } from 'app/api/apiSlice';
import { useAppDispatch, useAppSelector } from 'app/store';
import ErrorMessage from 'components/ErrorMessage';
import FilterPanel from 'components/FilterPanel';
import Loader from 'components/Loader';
import HotelsList from './components/HotelsList';
import { setHotels } from './store/hotelsSlice';

const Home = () => {
    const dispatch = useAppDispatch();
    const { hotels } = useAppSelector(({ hotels }) => hotels);
    const {
        data: hotelsResponse,
        isFetching,
        isSuccess,
        isError,
    } = useGetHotelsQuery();

    useEffect(() => {
        if (isSuccess && hotelsResponse) {
            dispatch(setHotels(hotelsResponse));
        }
    }, [hotelsResponse, isSuccess]);

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <FilterPanel disabled={isError} />
            {isFetching && <Loader />}
            {isError && <ErrorMessage label="Fetching hotels failed" />}
            {isSuccess && hotels && <HotelsList hotels={hotels} />}
        </Box>
    );
};

export default Home;
