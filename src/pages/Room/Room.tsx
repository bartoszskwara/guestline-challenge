import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';
import { useGetRoomsQuery } from 'app/api/apiSlice';
import Loader from 'components/Loader';
import RoomCard from 'pages/Room/components/RoomCard';
import { Room as RoomType } from 'types';

const Room = () => {
    const navigate = useNavigate();
    let { hotelId, roomId } = useParams();
    const [room, setRoom] = useState<RoomType>();
    const { data, isFetching, isSuccess } = useGetRoomsQuery({
        hotelId,
    });

    useEffect(() => {
        if (isSuccess && data && data.rooms) {
            setRoom(data.rooms.find((i) => i.id === roomId));
        }
    }, [data, isSuccess, roomId]);

    return (
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <ArrowBackIcon
                sx={{
                    cursor: 'pointer',
                    margin: (theme) => theme.spacing(2),
                    color: (theme) => theme.palette.text.primary,
                }}
                onClick={() => navigate(-1)}
            />
            {isFetching && <Loader />}
            {room && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <RoomCard {...room} />
                </Box>
            )}
        </Box>
    );
};

export default Room;
