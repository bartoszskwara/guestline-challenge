import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel, HotelWithRooms, Room } from 'types';

interface FilterStateType {
    hotels: HotelWithRooms[];
}

const initialState: FilterStateType = {
    hotels: [],
};

const { actions, reducer } = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setHotels: (state, action: PayloadAction<Hotel[]>) => {
            state.hotels = action.payload
                ? action.payload.map((hotel) => ({ hotel, rooms: undefined }))
                : [];
        },
        setHotelRooms: (
            state,
            action: PayloadAction<{ hotelId: string; rooms: Room[] }>
        ) => {
            const hotelToUpdate = state.hotels.find(
                (hotel) => hotel.hotel.id === action.payload.hotelId
            );
            if (hotelToUpdate) {
                hotelToUpdate.rooms = action.payload.rooms;
            }
        },
    },
});

export const { setHotels, setHotelRooms } = actions;

export default reducer;
