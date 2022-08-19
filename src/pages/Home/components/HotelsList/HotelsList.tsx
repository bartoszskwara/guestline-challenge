import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import useFilteredHotels from 'hooks/useFilteredHotels';
import { HotelWithRooms } from 'types';
import HotelContext from '../../context/HotelContext';
import HotelCard from '../HotelCard';

interface Props {
    hotels: HotelWithRooms[];
}

const HotelsList = ({ hotels }: Props) => {
    const filteredHotels = useFilteredHotels(hotels);
    return (
        <Box
            component="ul"
            sx={{ margin: 0, padding: 0, listStyleType: 'none' }}
        >
            {!filteredHotels.length && (
                <Typography
                    sx={{
                        marginY: (theme) => theme.spacing(5),
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    No hotels matching your criteria
                </Typography>
            )}
            {filteredHotels.map((hotelWithRooms) => (
                <Box key={hotelWithRooms.hotel.id} component="li">
                    <HotelContext.Provider value={hotelWithRooms}>
                        <HotelCard />
                    </HotelContext.Provider>
                </Box>
            ))}
        </Box>
    );
};

HotelsList.propTypes = {
    hotels: PropTypes.arrayOf(
        PropTypes.shape({
            hotel: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                address1: PropTypes.string.isRequired,
                address2: PropTypes.string.isRequired,
                postcode: PropTypes.string.isRequired,
                town: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                countryCode: PropTypes.string.isRequired,
                starRating: PropTypes.string.isRequired,
                facilities: PropTypes.arrayOf(
                    PropTypes.shape({
                        code: PropTypes.string.isRequired,
                        name: PropTypes.string,
                    })
                ).isRequired,
                telephone: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string.isRequired,
                        alt: PropTypes.string,
                    })
                ),
                checkInHours: PropTypes.string.isRequired,
                checkInMinutes: PropTypes.string.isRequired,
                checkOutHours: PropTypes.string.isRequired,
                checkOutMinutes: PropTypes.string.isRequired,
                position: PropTypes.shape({
                    latitude: PropTypes.number,
                    longitude: PropTypes.number,
                    timezone: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
            rooms: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    shortDescription: PropTypes.string,
                    longDescription: PropTypes.string.isRequired,
                    occupancy: PropTypes.shape({
                        maxAdults: PropTypes.number.isRequired,
                        maxChildren: PropTypes.number.isRequired,
                        maxOverall: PropTypes.number,
                    }),
                    disabledAccess: PropTypes.bool,
                    bedConfiguration: PropTypes.string.isRequired,
                    images: PropTypes.arrayOf(
                        PropTypes.shape({
                            url: PropTypes.string.isRequired,
                            alt: PropTypes.string,
                        })
                    ),
                    facilities: PropTypes.arrayOf(
                        PropTypes.shape({
                            code: PropTypes.string.isRequired,
                            name: PropTypes.string,
                        })
                    ).isRequired,
                })
            ),
        })
    ),
};

export default HotelsList;
