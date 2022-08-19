import { RatePlan } from 'types/RatePlan';
import { Room } from 'types/Room';

export type RoomsResponse = {
    rooms: Room[];
    ratePlans: RatePlan[];
};
