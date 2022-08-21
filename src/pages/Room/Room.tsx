import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';
import { useGetRoomsQuery } from 'app/api/apiSlice';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import RoomCard from 'pages/Room/components/RoomCard';
import { Room as RoomType } from 'types';

const Room = () => {
    const navigate = useNavigate();
    let { hotelId, roomId } = useParams();
    const [room, setRoom] = useState<RoomType>();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { data, isFetching, isSuccess, isError } = useGetRoomsQuery({
        hotelId,
    });

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        if (data && data.rooms) {
            const foundRoom = data.rooms.find((i) => i.id === roomId);
            if (foundRoom) {
                setRoom(foundRoom);
            } else {
                setErrorMessage('Room not found');
            }
        } else {
            setErrorMessage('Room not found');
        }
    }, [data, isSuccess, roomId]);

    useEffect(() => {
        if (isError) {
            setErrorMessage('Fetching room details failed');
        }
    }, [isError]);

    return (
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <ArrowBackIcon
                sx={{
                    cursor: 'pointer',
                    margin: (theme) => theme.spacing(2),
                    color: (theme) => theme.palette.text.primary,
                }}
                onClick={() => navigate('/')}
            />
            {isFetching && <Loader />}
            {(isError || errorMessage) && <ErrorMessage label={errorMessage} />}
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
