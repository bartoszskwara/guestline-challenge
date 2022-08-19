import { render, screen } from '@testing-library/react';
import Occupancy from 'components/Occupancy/Occupancy';

test('renders Occupancy component with adults and children', () => {
    render(
        <Occupancy
            occupancy={{
                maxAdults: 3,
                maxChildren: 2,
                maxOverall: 5,
            }}
        />
    );
    expect(screen.getByText(`3 adults • 2 children`)).toBeInTheDocument();
});

test('renders Occupancy component with 0 adults and 1 children', () => {
    render(
        <Occupancy
            occupancy={{
                maxAdults: 0,
                maxChildren: 1,
                maxOverall: 1,
            }}
        />
    );
    expect(screen.getByText(`0 adults • 1 child`)).toBeInTheDocument();
});

test('renders Occupancy component with 1 adult and 3 children', () => {
    render(
        <Occupancy
            occupancy={{
                maxAdults: 1,
                maxChildren: 3,
                maxOverall: 4,
            }}
        />
    );
    expect(screen.getByText(`1 adult • 3 children`)).toBeInTheDocument();
});
