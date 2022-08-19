import { useMemo } from 'react';
import { AddressKeys, Hotel } from 'types';

const useAddress = ({
    postcode,
    town,
    address1,
    address2,
    country,
}: Pick<Hotel, AddressKeys>) => {
    const postcodeWithTown = useMemo(
        () => [postcode, town].filter((i) => !!i).join(' '),
        [postcode, town]
    );
    return useMemo(
        () =>
            [address1, address2, postcodeWithTown, country]
                .filter((i) => !!i)
                .join(', '),
        [address1, address2, postcodeWithTown, country]
    );
};

export default useAddress;
