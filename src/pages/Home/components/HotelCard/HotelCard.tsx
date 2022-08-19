import React, { useContext, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { useGetRoomsQuery } from 'app/api/apiSlice';
import { useAppDispatch } from 'app/store';
import ItemHeader from 'components/ItemHeader';
import Loader from 'components/Loader';
import HotelContext from 'pages/Home/context/HotelContext';
import { HotelWithRooms } from 'types';
import { setHotelRooms } from '../../store/hotelsSlice';
import RoomsList from '../RoomsList';
import HeaderSubtitle from './HeaderSubtitle';

const HotelCard = () => {
    const dispatch = useAppDispatch();
    const {
        hotel: { id, name, description, images, starRating },
        rooms,
    } = useContext<HotelWithRooms>(HotelContext);
    const { data, isFetching, isSuccess } = useGetRoomsQuery({
        hotelId: id,
    });

    useEffect(() => {
        if (data && data.rooms) {
            dispatch(setHotelRooms({ hotelId: id, rooms: data.rooms || [] }));
        }
    }, [data, rooms]);

    return (
        <Paper
            elevation={0}
            sx={(theme) => ({
                margin: theme.spacing(2),
            })}
        >
            <ItemHeader
                title={name}
                subTitle={<HeaderSubtitle />}
                images={images}
                starRating={starRating}
            />
            <Typography
                variant="regular"
                component="p"
                sx={{ marginY: (theme) => theme.spacing(2) }}
            >
                {description}
            </Typography>
            {isFetching && <Loader />}
            {isSuccess && rooms && <RoomsList hotelId={id} rooms={rooms} />}
        </Paper>
    );
};

export default HotelCard;
