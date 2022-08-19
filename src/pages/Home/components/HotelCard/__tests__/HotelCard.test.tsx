import { screen } from '@testing-library/react';
import HotelCard from 'pages/Home/components/HotelCard/HotelCard';
import HotelContext from 'pages/Home/context/HotelContext';
import { customRender } from 'utilities/test-utils';

const hotel = {
    id: 'Hotel123',
    name: 'Golden Hotel',
    description: 'Hotel Description',
    address1: 'Address 1',
    address2: 'Address 2',
    postcode: '112233',
    town: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    starRating: '4',
    facilities: [],
    telephone: '',
    email: '',
    images: [],
    checkInHours: '',
    checkInMinutes: '',
    checkOutHours: '',
    checkOutMinutes: '',
    position: {
        latitude: 1,
        longitude: 2,
        timezone: 'GMT',
    },
};

test('renders HotelCard component with basic data', async () => {
    customRender(
        <HotelContext.Provider value={{ hotel }}>
            <HotelCard />
        </HotelContext.Provider>
    );
    expect(
        screen.getByText('Address 1, Address 2, 112233 London, United Kingdom')
    ).toBeInTheDocument();
    expect(screen.getByText('Golden Hotel')).toBeInTheDocument();
    expect(screen.getByText('Hotel Description')).toBeInTheDocument();
});
