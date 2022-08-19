import PropTypes from 'prop-types';
import { Box, Paper, Typography, Chip } from '@mui/material';
import ItemHeader from 'components/ItemHeader';
import Occupancy from 'components/Occupancy';
import { Room } from 'types';

type RoomKeys =
    | 'name'
    | 'images'
    | 'longDescription'
    | 'occupancy'
    | 'bedConfiguration'
    | 'facilities';

const RoomCard = ({
    name,
    images,
    longDescription,
    occupancy,
    bedConfiguration,
    facilities,
}: Pick<Room, RoomKeys>) => (
    <Paper
        elevation={0}
        sx={(theme) => ({
            margin: theme.spacing(2),
        })}
    >
        <ItemHeader
            title={name}
            subTitle={
                <Typography variant="regular" component="p">
                    {longDescription}
                </Typography>
            }
            images={images}
        />
        <Box
            sx={{
                marginY: (theme) => theme.spacing(2),
                padding: 0,
                listStyleType: 'none',
            }}
        >
            <Typography variant="regular" component="p">
                <Occupancy occupancy={occupancy} />
            </Typography>
            <Typography variant="regular" component="p">
                Bed configuration: {bedConfiguration}
            </Typography>
        </Box>
        {facilities.map((facility) => (
            <Chip
                key={facility.code}
                label={facility.name}
                sx={{
                    marginRight: (theme) => theme.spacing(0.5),
                    marginBottom: (theme) => theme.spacing(0.5),
                }}
            />
        ))}
    </Paper>
);

RoomCard.propTypes = {
    name: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    occupancy: PropTypes.shape({
        maxAdults: PropTypes.number.isRequired,
        maxChildren: PropTypes.number.isRequired,
        maxOverall: PropTypes.number,
    }),
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
};

export default RoomCard;
