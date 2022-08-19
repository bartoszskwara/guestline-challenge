import { Hotel } from './Hotel';
import { Room } from './Room';

export type HotelWithRooms = {
    hotel: Hotel;
    rooms?: Room[];
};
