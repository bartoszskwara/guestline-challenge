import React from 'react';
import PropTypes from 'prop-types';
import { List, Divider } from '@mui/material';
import { Room } from 'types';
import RoomItem from './RoomItem';

interface Props {
    hotelId: string;
    rooms: Room[];
}

const RoomsList = ({ hotelId, rooms }: Props) => (
    <List>
        {rooms.map((room, index) => (
            <React.Fragment key={room.id}>
                {index > 0 && <Divider component="li" />}
                <RoomItem hotelId={hotelId} {...room} />
            </React.Fragment>
        ))}
    </List>
);

RoomsList.propTypes = {
    hotelId: PropTypes.string.isRequired,
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
};

export default RoomsList;
