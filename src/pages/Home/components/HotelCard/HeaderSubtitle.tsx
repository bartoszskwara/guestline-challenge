import { useContext } from 'react';
import { Typography, Link } from '@mui/material';
import useAddress from 'hooks/useAddress';
import HotelContext from 'pages/Home/context/HotelContext';
import { HotelWithRooms } from 'types';

const HeaderSubtitle = () => {
    const {
        hotel: { postcode, town, address1, address2, country },
    } = useContext<HotelWithRooms>(HotelContext);
    const addressLine = useAddress({
        postcode,
        town,
        address1,
        address2,
        country,
    });

    return (
        <Link
            href={`https://www.google.com/maps/search/${addressLine}`}
            underline="always"
            target="_blank"
            rel="noopener"
        >
            <Typography variant="regular" component="p">
                {addressLine}
            </Typography>
        </Link>
    );
};

export default HeaderSubtitle;
