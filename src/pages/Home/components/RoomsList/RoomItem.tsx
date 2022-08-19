import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ListItemText, Typography, ListItemButton } from '@mui/material';
import Occupancy from 'components/Occupancy';
import { Room } from 'types';

interface Props {
    hotelId: string;
}

const RoomItem = ({
    hotelId,
    id,
    name,
    shortDescription,
    occupancy,
}: Props & Room) => {
    const navigate = useNavigate();
    return (
        <ListItemButton onClick={() => navigate(`${hotelId}/${id}`)}>
            <ListItemText
                primary={
                    <Typography component="p" variant="medium">
                        {name}
                    </Typography>
                }
                secondary={
                    <Typography component="p" variant="regular">
                        {shortDescription && (
                            <>
                                {shortDescription}
                                <br />
                            </>
                        )}
                        <Occupancy occupancy={occupancy} />
                    </Typography>
                }
                disableTypography
            />
        </ListItemButton>
    );
};

RoomItem.propTypes = {
    hotelId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    occupancy: PropTypes.shape({
        maxAdults: PropTypes.number.isRequired,
        maxChildren: PropTypes.number.isRequired,
        maxOverall: PropTypes.number,
    }),
};

export default RoomItem;
