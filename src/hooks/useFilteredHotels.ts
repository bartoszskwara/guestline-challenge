import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/store';
import { HotelWithRooms } from 'types';

const useFilteredHotels = (hotels: HotelWithRooms[]) => {
    const [filteredHotels, setFilteredHotels] =
        useState<HotelWithRooms[]>(hotels);
    const { rating, adults, children } = useAppSelector(({ filter }) => filter);

    useEffect(() => {
        const hotelsMatched = [...hotels]
            .filter(
                (hotelWithRooms) =>
                    Number(hotelWithRooms.hotel.starRating) >= rating
            )
            .map((hotelWithRooms) => ({
                ...hotelWithRooms,
                rooms: hotelWithRooms.rooms
                    ? hotelWithRooms.rooms.filter(
                          (room) =>
                              room.occupancy.maxAdults >= adults &&
                              room.occupancy.maxChildren >= children
                      )
                    : undefined,
            }))
            .filter(
                (hotelWithRooms) =>
                    !hotelWithRooms.rooms || !!hotelWithRooms.rooms.length
            );
        setFilteredHotels(hotelsMatched);
    }, [hotels, rating, adults, children]);

    return filteredHotels;
};

export default useFilteredHotels;
