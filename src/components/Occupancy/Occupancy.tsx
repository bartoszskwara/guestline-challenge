import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Occupancy as OccupancyType } from 'types';

interface Props {
    occupancy: OccupancyType;
}

const Occupancy = ({ occupancy }: Props) => {
    const { childrenOccupancy, adultOccupancy } = useMemo(
        () => ({
            childrenOccupancy: occupancy?.maxChildren || 0,
            adultOccupancy: occupancy?.maxAdults || 0,
        }),
        [occupancy]
    );
    return (
        <>
            {`${adultOccupancy} ${adultOccupancy === 1 ? 'adult' : 'adults'}`}{' '}
            &#8226;{' '}
            {`${childrenOccupancy} ${
                childrenOccupancy === 1 ? 'child' : 'children'
            }`}
        </>
    );
};

Occupancy.propTypes = {
    occupancy: PropTypes.shape({
        maxAdults: PropTypes.number.isRequired,
        maxChildren: PropTypes.number.isRequired,
        maxOverall: PropTypes.number,
    }),
};

export default Occupancy;
